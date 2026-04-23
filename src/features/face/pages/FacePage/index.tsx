'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState, useEffect, Suspense, useCallback } from 'react';
import { Button, Card, Spinner } from '@heroui/react';

import { Camera, StepIndicator } from '../../components';
import {
  getStoredLicense,
  StoredDocument,
  verifyFaceVerificationToken,
} from '../../services/firebaseService';
import {
  extractDocumentData,
  verifyIdentityAndLiveness,
} from '../../services/geminiService';
import { translations, getDocLabel } from '../../utils/i18n';
import {
  VerificationStep,
  ExtractedData,
  VerificationResult,
  DocumentType,
  Language,
  LivenessGesture,
} from '../../types';

// Predefined Gestures for Liveness
const GESTURES: LivenessGesture[] = [
  {
    id: 'smile',
    label: { en: 'Smile widely', es: 'Sonríe ampliamente' },
    description: {
      en: 'Please smile to show you are live.',
      es: 'Por favor sonríe para demostrar que estás vivo.',
    },
  },
  {
    id: 'hand_eye',
    label: { en: 'Cover your left eye', es: 'Cubre tu ojo izquierdo' },
    description: {
      en: 'Use your hand to cover your left eye.',
      es: 'Usa tu mano para cubrir tu ojo izquierdo.',
    },
  },
  {
    id: 'open_mouth',
    label: { en: 'Open your mouth', es: 'Abre la boca' },
    description: {
      en: 'Open your mouth slightly.',
      es: 'Abre la boca ligeramente.',
    },
  },
];

const VerificationContent: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Config State
  const [lang, setLang] = useState<Language>(() => {
    return searchParams.get('lang') === 'en' ? 'en' : 'es';
  });

  const [country, setCountry] = useState<string | null>('VE');
  const [userId, setUserId] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  // Flow State
  const [step, setStep] = useState<VerificationStep>(VerificationStep.INTRO);
  const [docType, setDocType] = useState<DocumentType>(
    DocumentType.NATIONAL_ID
  );

  // Data State
  const [docImage, setDocImage] = useState<string | null>(null);
  const [extractedData, setExtractedData] = useState<ExtractedData | null>(
    null
  );
  const [currentGesture, setCurrentGesture] = useState<LivenessGesture | null>(
    null
  );
  const [verificationResult, setVerificationResult] =
    useState<VerificationResult | null>(null);
  const [storedDoc, setStoredDoc] = useState<StoredDocument | null>(null);

  // UI State
  const [isProcessing, setIsProcessing] = useState(false);
  const [captureError, setCaptureError] = useState<string | null>(null);

  useEffect(() => {
    const countryParam = searchParams.get('country');
    const userIdParam = searchParams.get('userId');
    const tokenParam = searchParams.get('token');

    setCountry(countryParam ? countryParam.toUpperCase() : 'VE');
    if (userIdParam) setUserId(userIdParam);
    if (tokenParam) setToken(tokenParam);
  }, [searchParams]);

  const t = translations[lang];

  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'es' : 'en'));

  const handleStart = () => setStep(VerificationStep.DOCUMENT_SELECTION);

  const selectDocument = (type: DocumentType) => {
    setDocType(type);
    setCaptureError(null);
    setStep(VerificationStep.DOCUMENT_CAPTURE);
  };

  const handleDocumentCapture = async (imageSrc: string) => {
    setDocImage(imageSrc);
    setCaptureError(null);
    setStep(VerificationStep.DOCUMENT_PROCESSING);
    setIsProcessing(true);

    try {
      const data = await extractDocumentData(imageSrc, docType, country);

      if (!data.isValidDocument) {
        setIsProcessing(false);
        setCaptureError(data.error || t.doc_invalid_msg);
        setStep(VerificationStep.DOCUMENT_CAPTURE);
        return;
      }

      setExtractedData(data);

      if (userId) {
        getStoredLicense(userId)
          .then((doc) => setStoredDoc(doc))
          .catch((err) => console.error('Failed to fetch stored doc', err));
      }

      setStep(VerificationStep.DOCUMENT_CONFIRM);
    } catch (error) {
      console.error(error);
      setIsProcessing(false);
      setCaptureError(t.error_processing);
      setStep(VerificationStep.DOCUMENT_CAPTURE);
    } finally {
      setIsProcessing(false);
    }
  };

  const confirmDocumentData = () => {
    const randomGesture = GESTURES[Math.floor(Math.random() * GESTURES.length)];
    setCurrentGesture(randomGesture);
    setStep(VerificationStep.FACE_INSTRUCTION);
  };

  const startFaceCapture = () => {
    setStep(VerificationStep.FACE_CAPTURE);
  };

  const handleFaceCapture = async (imageSrc: string) => {
    if (!docImage || !currentGesture) return;

    setStep(VerificationStep.FINAL_PROCESSING);
    setIsProcessing(true);

    try {
      const result = await verifyIdentityAndLiveness(
        docImage,
        imageSrc,
        currentGesture,
        lang,
        storedDoc
      );

      setVerificationResult(result);
      if (result.isVerified) {
        setStep(VerificationStep.SUCCESS);
      } else {
        setStep(VerificationStep.FAILURE);
      }
    } catch (error) {
      console.error(error);
      setVerificationResult({
        isVerified: false,
        confidence: 0,
        reason: t.network_error,
      });
      setStep(VerificationStep.FAILURE);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleRetryCapture = () => {
    setCaptureError(null);
    setDocImage(null);
  };

  const handleSuccessContinue = useCallback(async () => {
    if (token) {
      try {
        const success = await verifyFaceVerificationToken(token);
        if (success) {
          console.log('User status updated via Cloud Function');
        }
      } catch (updateErr) {
        console.error('Failed to call verifyFaceVerificationToken:', updateErr);
      }
    }
    router.push('/face/success');
  }, [token, router]);

  useEffect(() => {
    if (step === VerificationStep.SUCCESS) {
      const timer = setTimeout(() => {
        handleSuccessContinue();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [step, handleSuccessContinue]);

  const getStepNumber = () => {
    switch (step) {
      case VerificationStep.INTRO:
      case VerificationStep.DOCUMENT_SELECTION:
        return 1;
      case VerificationStep.DOCUMENT_CAPTURE:
      case VerificationStep.DOCUMENT_PROCESSING:
      case VerificationStep.DOCUMENT_CONFIRM:
        return 2;
      case VerificationStep.FACE_INSTRUCTION:
      case VerificationStep.FACE_CAPTURE:
      case VerificationStep.FINAL_PROCESSING:
        return 3;
      case VerificationStep.SUCCESS:
      case VerificationStep.FAILURE:
        return 4;
      default:
        return 1;
    }
  };

  // --- Views ---

  if (step === VerificationStep.INTRO) {
    return (
      <div className="bg-background relative flex min-h-screen flex-col overflow-hidden">
        {/* Background Accent */}
        <div className="bg-primary/10 absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl"></div>
        <div className="bg-primary/5 absolute -bottom-24 -left-24 h-64 w-64 rounded-full blur-3xl"></div>

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-12 p-8 text-center">
          <Button
            onPress={toggleLang}
            variant="ghost"
            size="sm"
            className="bg-default-100/50 absolute top-6 right-6 rounded-full backdrop-blur-md"
          >
            <span className="material-symbols-rounded text-lg">language</span>
            {lang.toUpperCase()}
          </Button>

          <div className="bg-primary/10 flex h-32 w-32 items-center justify-center rounded-3xl shadow-inner">
            <span className="material-symbols-rounded text-primary animate-pulse text-6xl">
              verified_user
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-default-900 text-4xl font-bold tracking-tight">
              {t.app_name}
            </h1>
            <p className="text-default-500 mx-auto max-w-xs text-lg leading-relaxed">
              {t.app_desc}
            </p>
          </div>
        </div>

        <div className="relative z-10 p-8">
          <Button
            onPress={handleStart}
            variant="primary"
            size="lg"
            className="shadow-primary/20 h-16 w-full text-lg font-medium shadow-xl"
          >
            {t.start}
            <span className="material-symbols-rounded">arrow_forward</span>
          </Button>
        </div>
      </div>
    );
  }

  if (step === VerificationStep.DOCUMENT_SELECTION) {
    return (
      <div className="bg-default-50 flex min-h-screen flex-col">
        <div className="border-default-100 bg-background/80 sticky top-0 z-20 flex flex-row items-center gap-4 border-b px-6 py-4 backdrop-blur-xl">
          <Button
            isIconOnly
            onPress={() => setStep(VerificationStep.INTRO)}
            size="sm"
            className="rounded-full"
          >
            <span className="material-symbols-rounded">arrow_back</span>
          </Button>
          <h2 className="text-default-900 text-xl font-bold tracking-tight">
            {t.select_doc_type}
          </h2>
        </div>

        <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center space-y-6 p-6">
          <Button
            onPress={() => selectDocument(DocumentType.NATIONAL_ID)}
            className="bg-background h-auto w-full items-center justify-start rounded-2xl border-none p-1 text-left shadow-md transition-all hover:shadow-lg"
          >
            <div className="flex w-full flex-row items-center gap-4 p-4">
              <div className="bg-primary/10 text-primary flex h-14 w-14 shrink-0 items-center justify-center rounded-lg">
                <span className="material-symbols-rounded text-3xl">badge</span>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-default-800 text-lg font-bold">
                  {getDocLabel(DocumentType.NATIONAL_ID, country, lang)}
                </p>
                <p className="text-default-400 text-xs">{t.doc_id_desc}</p>
              </div>
            </div>
          </Button>

          <Button
            onPress={() => selectDocument(DocumentType.LICENSE)}
            className="bg-background h-auto w-full items-center justify-start rounded-2xl border-none p-1 text-left shadow-md transition-all hover:shadow-lg"
          >
            <div className="flex w-full flex-row items-center gap-4 p-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-orange-600">
                <span className="material-symbols-rounded text-3xl">
                  credit_card
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-default-800 text-lg font-medium">
                  {getDocLabel(DocumentType.LICENSE, country, lang)}
                </p>
                <p className="text-default-400 text-xs">{t.doc_license_desc}</p>
              </div>
            </div>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-default-50 flex min-h-screen flex-col overflow-hidden">
      <StepIndicator currentStep={getStepNumber()} />

      <div className="relative flex flex-1 flex-col overflow-hidden">
        {/* Camera Step */}
        {step === VerificationStep.DOCUMENT_CAPTURE && (
          <>
            <Camera
              onCapture={handleDocumentCapture}
              maskType="card"
              instruction={t.scan_instruction}
            />
            {captureError && (
              <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 p-6 backdrop-blur-sm">
                <Card className="max-w-xs border-none">
                  <Card.Header className="flex flex-col items-center pt-8">
                    <div className="bg-danger/10 mb-4 flex h-14 w-14 items-center justify-center rounded-full">
                      <span className="material-symbols-rounded text-danger text-3xl">
                        warning
                      </span>
                    </div>
                    <h3 className="text-default-900 text-xl font-bold">
                      {t.doc_invalid_title}
                    </h3>
                  </Card.Header>
                  <Card.Content className="px-6 pb-8 text-center">
                    <p className="text-default-500 mb-6 leading-relaxed">
                      {captureError}
                    </p>
                    <Button
                      onPress={handleRetryCapture}
                      variant="primary"
                      className="h-12 w-full font-medium"
                    >
                      {t.retry}
                    </Button>
                  </Card.Content>
                </Card>
              </div>
            )}
          </>
        )}

        {/* Processing State */}
        {isProcessing && (
          <div className="animate-in fade-in bg-background flex flex-1 flex-col items-center justify-center gap-6 p-8 duration-500">
            <div className="relative">
              <Spinner size="lg" color="accent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-rounded text-primary/40 animate-bounce text-xl">
                  auto_awesome
                </span>
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-default-900 text-2xl font-bold">
                {step === VerificationStep.DOCUMENT_PROCESSING
                  ? t.processing_doc
                  : t.processing_final}
              </h2>
              <p className="text-default-400 mt-2 font-medium">
                Powered by Gemini AI
              </p>
            </div>
          </div>
        )}

        {/* Confirmation Step */}
        {step === VerificationStep.DOCUMENT_CONFIRM && extractedData && (
          <div className="bg-background flex flex-1 flex-col overflow-y-auto">
            <div className="mx-auto w-full max-w-md p-8">
              <h2 className="text-default-900 mb-8 text-3xl font-bold tracking-tight">
                {t.confirm_details}
              </h2>

              <div className="group relative mb-10">
                <div className="from-primary/20 to-secondary/20 absolute -inset-1 rounded-2xl bg-linear-to-r opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                <img
                  src={docImage!}
                  alt="Document Capture"
                  className="border-default-200 relative h-48 w-full rounded-2xl border object-cover shadow-xl"
                />
              </div>

              <div className="space-y-6">
                <div className="bg-default-50 hover:bg-default-100 border-default-100 rounded-2xl border p-5 transition-all">
                  <label className="text-default-400 text-[10px] font-black tracking-[0.2em] uppercase">
                    {t.full_name}
                  </label>
                  <p className="text-default-800 mt-1 text-xl font-bold uppercase">
                    {extractedData.firstName} {extractedData.lastName}
                  </p>
                </div>

                <div className="bg-default-50 hover:bg-default-100 border-default-100 rounded-2xl border p-5 transition-all">
                  <label className="text-default-400 text-[10px] font-black tracking-[0.2em] uppercase">
                    {t.id_number}
                  </label>
                  <p className="text-default-800 mt-1 text-xl font-bold">
                    {extractedData.documentNumber || 'N/A'}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-default-50 border-default-100 rounded-2xl border p-5">
                    <label className="text-default-400 text-[10px] font-black tracking-[0.2em] uppercase">
                      {t.birth_date}
                    </label>
                    <p className="text-default-800 mt-1 text-lg font-bold">
                      {extractedData.birthDate || 'N/A'}
                    </p>
                  </div>
                  <div className="bg-default-50 border-default-100 rounded-2xl border p-5">
                    <label className="text-default-400 text-[10px] font-black tracking-[0.2em] uppercase">
                      {t.expires}
                    </label>
                    <p className="text-default-800 mt-1 text-lg font-bold">
                      {extractedData.expirationDate || 'N/A'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-default-100 bg-background/80 sticky bottom-0 mt-auto border-t p-8 backdrop-blur-md">
              <div className="mx-auto flex max-w-md gap-4">
                <Button
                  variant="ghost"
                  onPress={() => setStep(VerificationStep.DOCUMENT_CAPTURE)}
                  className="h-14 flex-1 font-medium"
                >
                  {t.retake}
                </Button>
                <Button
                  onPress={confirmDocumentData}
                  variant="primary"
                  className="shadow-primary/20 h-14 flex-2 font-medium shadow-lg"
                >
                  {t.confirm_next}
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Face Instruction Step */}
        {step === VerificationStep.FACE_INSTRUCTION && currentGesture && (
          <div className="bg-background flex flex-1 flex-col items-center justify-center gap-10 p-8 text-center">
            <div className="relative">
              <div className="bg-primary/5 absolute -inset-4 animate-ping rounded-full"></div>
              <div className="border-primary/20 bg-primary/5 relative flex h-36 w-36 items-center justify-center rounded-full border-4 shadow-inner">
                <span className="material-symbols-rounded text-primary text-6xl">
                  face
                </span>
              </div>
            </div>

            <div className="max-w-xs space-y-4">
              <h2 className="text-default-900 text-3xl font-bold tracking-tight">
                {t.liveness_title}
              </h2>
              <p className="text-default-500 leading-relaxed">
                {t.liveness_desc}
              </p>
            </div>

            <Card className="bg-primary w-full max-w-xs border-none p-2 text-white shadow-xl">
              <Card.Content className="gap-2 p-8 text-center">
                <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-60">
                  {t.gesture_required}
                </span>
                <p className="text-2xl leading-tight font-black tracking-tight italic">
                  &quot;{currentGesture.label[lang]}&quot;
                </p>
              </Card.Content>
            </Card>

            <Button
              onPress={startFaceCapture}
              variant="primary"
              size="lg"
              className="shadow-primary/20 h-16 w-full max-w-xs text-lg font-bold shadow-xl"
            >
              {t.i_am_ready}
            </Button>
          </div>
        )}

        {/* Face Capture Step */}
        {step === VerificationStep.FACE_CAPTURE && currentGesture && (
          <Camera
            onCapture={handleFaceCapture}
            maskType="circle"
            facingMode="user"
            instruction={currentGesture.label[lang]}
          />
        )}

        {/* Success View */}
        {step === VerificationStep.SUCCESS && (
          <div className="animate-in zoom-in-95 fade-in bg-background flex flex-1 flex-col items-center justify-center gap-8 p-8 text-center duration-500">
            <div className="bg-success/10 text-success flex h-32 w-32 items-center justify-center rounded-full shadow-inner">
              <span className="material-symbols-rounded text-6xl">
                check_circle
              </span>
            </div>
            <div className="space-y-3">
              <h2 className="text-default-900 text-4xl font-black tracking-tighter">
                {t.verified_title}
              </h2>
              <p className="text-default-500 mx-auto max-w-xs text-lg leading-relaxed">
                {t.verified_desc}
              </p>
            </div>

            {verificationResult && (
              <Card className="bg-default-50 w-full max-w-xs border-none">
                <Card.Content className="gap-2 p-6 text-left">
                  <span className="text-default-400 text-[10px] font-black tracking-widest uppercase">
                    {t.ai_reason}
                  </span>
                  <p className="text-default-700 text-sm leading-relaxed font-medium">
                    {verificationResult.reason}
                  </p>
                </Card.Content>
              </Card>
            )}

            <div className="flex flex-col items-center gap-3 pt-6">
              <Spinner size="sm" color="accent" />
              <p className="text-default-400 text-sm font-bold tracking-widest uppercase">
                {t.redirecting}
              </p>
            </div>
          </div>
        )}

        {/* Failure View */}
        {step === VerificationStep.FAILURE && (
          <div className="animate-in zoom-in-95 fade-in bg-background flex flex-1 flex-col items-center justify-center gap-8 p-8 text-center duration-500">
            <div className="bg-danger/10 text-danger flex h-32 w-32 items-center justify-center rounded-full shadow-inner">
              <span className="material-symbols-rounded text-6xl">cancel</span>
            </div>
            <div className="space-y-3">
              <h2 className="text-default-900 text-4xl font-black tracking-tighter">
                {t.failed_title}
              </h2>
              <p className="text-default-500 mx-auto max-w-xs text-lg leading-relaxed">
                {t.failed_desc}
              </p>
            </div>

            {verificationResult && (
              <Card className="bg-danger/5 w-full max-w-xs border-none">
                <Card.Content className="gap-2 p-6 text-left">
                  <span className="text-danger/60 text-[10px] font-black tracking-widest uppercase">
                    {t.ai_reason}
                  </span>
                  <p className="text-danger/80 text-sm leading-relaxed font-medium">
                    {verificationResult.reason}
                  </p>
                </Card.Content>
              </Card>
            )}

            <Button
              onPress={() => window.location.reload()}
              variant="ghost"
              size="lg"
              className="h-16 w-full max-w-xs font-bold"
            >
              <span className="material-symbols-rounded">refresh</span>
              {t.retry}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export const FacePage: React.FC = () => {
  return (
    <Suspense
      fallback={
        <div className="bg-background flex h-screen items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <Spinner size="lg" color="accent" />
            <p className="text-default-500 font-medium tracking-tight">
              {typeof window !== 'undefined' &&
              window.location.search.includes('lang=en')
                ? 'Loading Verification System...'
                : 'Cargando Sistema de Verificación...'}
            </p>
          </div>
        </div>
      }
    >
      <VerificationContent />
    </Suspense>
  );
};
