'use client';

import React, { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { Spinner, Button } from '@heroui/react';

interface CameraProps {
  onCapture: (imageSrc: string) => void;
  maskType: 'card' | 'circle';
  instruction: string;
  facingMode?: 'user' | 'environment';
}

export const Camera: React.FC<CameraProps> = ({
  onCapture,
  maskType,
  instruction,
  facingMode = 'environment',
}) => {
  const webcamRef = useRef<Webcam>(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeFacingMode, setActiveFacingMode] = useState(facingMode);

  const handleUserMedia = useCallback(() => {
    setIsStreaming(true);
    setError(null);
  }, []);

  const handleUserMediaError = useCallback(
    (err: string | DOMException) => {
      const errorObj = typeof err === 'string' ? new Error(err) : err;
      console.error('Camera initialization failed', errorObj);

      if (activeFacingMode === 'user') {
        setActiveFacingMode('environment');
        return;
      }

      setIsStreaming(false);

      if (
        errorObj.name === 'NotAllowedError' ||
        errorObj.name === 'PermissionDeniedError'
      ) {
        setError(
          'Camera permission denied. Please allow camera access in your browser settings.'
        );
      } else {
        setError(
          'Unable to access camera. Please ensure no other app is using it.'
        );
      }
    },
    [activeFacingMode]
  );

  const handleCapture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      onCapture(imageSrc);
    }
  }, [onCapture]);

  const getVideoConstraints = () => {
    if (activeFacingMode === 'user') {
      return { facingMode: 'user' };
    }
    return {
      facingMode: 'environment',
      width: { ideal: 1920 },
      height: { ideal: 1080 },
    };
  };

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden bg-black">
      {error ? (
        <div className="p-6 text-center text-white">
          <span className="material-symbols-rounded mb-4 text-4xl text-red-500">
            error
          </span>
          <p className="mb-6 font-medium">{error}</p>
          <Button
            onPress={() => {
              setError(null);
              setActiveFacingMode((prev) =>
                prev === 'user' ? 'environment' : 'user'
              );
            }}
            variant="ghost"
          >
            <span className="material-symbols-rounded text-lg">sync</span>
            Retry / Switch
          </Button>
        </div>
      ) : (
        <>
          <div className="pointer-events-auto absolute top-6 right-6 z-20">
            <Button
              isIconOnly
              onPress={() =>
                setActiveFacingMode((prev) =>
                  prev === 'user' ? 'environment' : 'user'
                )
              }
              className="h-12 w-12 rounded-full bg-black/40 text-white backdrop-blur-xl transition-all hover:bg-black/60 active:scale-95"
            >
              <span className="material-symbols-rounded text-2xl">
                flip_camera_ios
              </span>
            </Button>
          </div>

          {!isStreaming && (
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <Spinner size="lg" color="current" className="text-white" />
            </div>
          )}

          <Webcam
            ref={webcamRef}
            audio={false}
            className={`absolute h-full w-full object-cover ${activeFacingMode === 'user' ? 'scale-x-[-1]' : ''} ${
              !isStreaming ? 'invisible' : ''
            }`}
            screenshotFormat="image/jpeg"
            videoConstraints={getVideoConstraints()}
            onUserMedia={handleUserMedia}
            onUserMediaError={handleUserMediaError}
          />

          {isStreaming && (
            <>
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-black/30"></div>

                {maskType === 'card' && (
                  <div className="absolute top-1/2 left-1/2 aspect-[1.586/1] w-[85%] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border-2 border-white/50 shadow-[0_0_0_9999px_rgba(0,0,0,0.6)]">
                    <div className="border-primary/40 absolute inset-0 animate-pulse rounded-2xl border-2"></div>
                  </div>
                )}

                {maskType === 'circle' && (
                  <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/50 shadow-[0_0_0_9999px_rgba(0,0,0,0.6)]">
                    <div className="border-primary/30 absolute inset-0 animate-pulse rounded-full border-4"></div>
                  </div>
                )}
              </div>

              <div className="absolute right-0 bottom-0 left-0 flex flex-col items-center bg-linear-to-t from-black/80 via-black/40 to-transparent p-10 pb-[calc(2.5rem+env(safe-area-inset-bottom))]">
                <p className="mb-10 max-w-xs px-4 text-center text-lg leading-relaxed font-semibold text-white drop-shadow-lg">
                  {instruction}
                </p>

                <div className="flex items-center justify-center">
                  <Button
                    isIconOnly
                    onPress={handleCapture}
                    className="h-20 w-20 rounded-full border-4 border-white bg-white/20 transition-transform active:scale-90"
                    aria-label="Capture Photo"
                  >
                    <div className="h-14 w-14 rounded-full bg-white shadow-xl"></div>
                  </Button>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};
