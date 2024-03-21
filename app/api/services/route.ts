import { NextResponse } from 'next/server';
import prisma from '@/app/lib/utils/prisma/database';
import { servicePersonExtended } from '@/app/lib/interfaces/service';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const limit = searchParams.get('limit');
  const categoryId = searchParams.get('categoryId');
  const categoryName = searchParams.get('categoryName');

  try {
    const response = await prisma.servicePerson
      .findMany({
        include: {
          category: true,
          reviewMessages: true,
          _count: {
            select: {
              reviewMessages: true,
            },
          },
        },
        take: limit ? parseInt(limit) : undefined,
        where: {
          categoryId: categoryId ? parseInt(categoryId) : undefined,
          category: {
            title: {
              contains: categoryName ? categoryName : undefined,
              mode: 'insensitive',
            },
          },
        },
      })
      .then((data) => {
        const response = data.map((item: any) => {
          item.rating =
            item.reviewMessages.length > 0
              ? item.reviewMessages.reduce((a: any, b: any) => a + b.rating, 0) / item.reviewMessages.length
              : 0;

          return item as servicePersonExtended;
        });

        return response;
      });

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
