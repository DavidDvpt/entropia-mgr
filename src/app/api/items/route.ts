import { getDbItems } from '@/modules/item/dbItem';
import { NextRequest, NextResponse } from 'next/server';

async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const itemTypeId = searchParams.get('itemTypeId') ?? undefined;
    const id = searchParams.get('id') ?? undefined;
    console.log(id, itemTypeId);
    const response = await getDbItems({ itemTypeId, id });

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    // In case of an error, return an error response with an appropriate status code
    return NextResponse.error().status;
  }
}

export { GET };
