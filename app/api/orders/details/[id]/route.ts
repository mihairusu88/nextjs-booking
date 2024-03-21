import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/utils/prisma/database';
import { order } from '@prisma/client';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const headers = req.headers;

  if (!params.id) {
    return NextResponse.json({ data: { message: 'Id is required', type: 'Error' } }, { status: 400 });
  }

  if (!headers.get('authorization')) {
    return NextResponse.json(
      {
        data: {
          message: 'Unauthorized access to this resource.',
          type: 'Error',
        },
      },
      { status: 401 },
    );
  }

  let where = {
    id: Number(params.id),
  };

  if (isNaN(Number(params.id))) {
    where = {
      uuid: params.id,
    } as any;
  }

  try {
    const response = (await prisma.order.findFirst({
      where: {
        ...where,
      },
      include: {
        services: true,
        servicePerson: true,
        category: true,
      },
    })) as order;

    if (!response) {
      return NextResponse.json({ data: { message: 'Order not found.', type: 'Error' } }, { status: 404 });
    }

    return NextResponse.json(
      {
        data: response,
      },
      { status: 200 },
    );
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
