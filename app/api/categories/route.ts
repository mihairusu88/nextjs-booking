import { NextResponse } from 'next/server';
import prisma from '@/app/lib/utils/prisma/database';

export async function GET() {
  try {
    const response = await prisma.category.findMany();

    return NextResponse.json({ data: response }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      {
        data: {
          message: error.message,
          type: error.constructor.name,
        },
      },
      { status: 500 },
    );
  }
}
