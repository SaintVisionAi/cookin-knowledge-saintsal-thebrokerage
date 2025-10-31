import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    const expectedToken = process.env.GHL_WEBHOOK_SECRET || 'pit-fd2d456a-1439-49a5-a9c7-d0524e4797ad';
    
    if (!authHeader || authHeader !== `Bearer ${expectedToken}`) {
      console.error('❌ Unauthorized webhook attempt');
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const payload = await request.json();
    
    console.log('📥 GHL Webhook Received:', {
      event: payload.event,
      workflow: payload.workflow_name,
      contact: payload.contact?.name,
      email: payload.contact?.email,
      phone: payload.contact?.phone,
    });

    if (payload.event === 'apply_now_workflow') {
      console.log('🎯 Processing Apply Now:', payload.contact);
    }

    return NextResponse.json({
      success: true,
      message: 'Webhook processed',
      event: payload.event,
      contact_id: payload.contact?.id,
    });

  } catch (error) {
    console.error('❌ Webhook error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    endpoint: '/api/webhooks/ghl',
    timestamp: new Date().toISOString(),
  });
}
