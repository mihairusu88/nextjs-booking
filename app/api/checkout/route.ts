import { NextResponse, NextRequest } from 'next/server';
import { createPaymentIntent } from '@/app/lib/utils/paymentUtils';

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { amount } = data;

  if (!data) {
    return NextResponse.json(new Error('Data is required'), { status: 400 });
  }

  if (!amount) {
    return NextResponse.json(new Error('Amount is required'), { status: 400 });
  }

  try {
    const responsePaymentIntent = await createPaymentIntent(amount);

    return NextResponse.json(
      { client_secret: responsePaymentIntent.client_secret, payment_intent_id: responsePaymentIntent.id },
      { status: 200 },
    );
  } catch (error: any) {
    return NextResponse.json(error, { status: 500 });
  }
}
