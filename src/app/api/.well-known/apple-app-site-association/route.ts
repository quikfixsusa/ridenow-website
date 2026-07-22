import { NextResponse } from 'next/server';

const BUNDLE_ID = 'FRHJW99ZL2.com.ridenow.taxi'; // replace with your bundle ID

const association = {
  applinks: {
    apps: [],
    details: [
      {
        appID: `${BUNDLE_ID}`,
        paths: ['/records/*'],
      },
    ],
  },
};

export async function GET() {
  return NextResponse.json(association, { status: 200 });
}
