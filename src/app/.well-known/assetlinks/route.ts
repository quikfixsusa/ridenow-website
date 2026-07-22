import { NextResponse } from 'next/server';

const assetLinks = [
  {
    relation: ['delegate_permission/common.handle_all_urls'],
    target: {
      namespace: 'ridenow_app',
      package_name: 'com.ridenow.taxi',
      sha256_cert_fingerprints: [
        // Supports multiple fingerprints for different apps and keys
        'E3:B6:EA:FE:D6:32:65:32:AC:8B:7F:E4:ED:3E:0F:1E:76:A4:25:4C:6C:60:AB:50:FF:0F:16:38:94:06:8B:D8',
        'E2:7F:08:85:6D:08:C8:5A:01:7F:3A:96:25:1B:91:FA:FA:AD:49:DA:99:90:E7:F4:04:04:95:E2:EC:EF:39:EA',
      ],
    },
  },
];

export async function GET() {
  return NextResponse.json(assetLinks, { status: 200 });
}
