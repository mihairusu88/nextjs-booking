import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/utils/prisma/database';
import { servicePersonExtended } from '@/app/lib/interfaces/service';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  if (!params.id) {
    return NextResponse.json({ data: { message: 'Id is required', type: 'Error' } }, { status: 400 });
  }

  if (isNaN(Number(params.id))) {
    return NextResponse.json({ data: { message: 'Id must be a number', type: 'Error' } }, { status: 400 });
  }

  try {
    const response = await prisma.servicePerson
      .findUnique({
        where: {
          id: Number(params.id),
        },
        include: {
          photos: true,
          reviewMessages: {
            include: {
              user: {
                select: {
                  first_name: true,
                  last_name: true,
                  imageUrl: true,
                },
              },
            },
          },
          category: true,
          _count: {
            select: {
              reviewMessages: true,
            },
          },
        },
      })
      .then((res: any) => {
        res.rating =
          res.reviewMessages.length > 0
            ? res.reviewMessages.reduce((a: any, b: any) => a + b.rating, 0) / res.reviewMessages.length
            : 0;

        return res as servicePersonExtended;
      });

    if (!response) {
      return NextResponse.json({ data: { message: 'Service person not found.', type: 'Error' } }, { status: 404 });
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
