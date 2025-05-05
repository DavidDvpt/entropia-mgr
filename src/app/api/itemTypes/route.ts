import { getDbItemTypes } from '@/modules/itemType/dbItemType';
import { NextRequest, NextResponse } from 'next/server';

async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const itemCategoryId = searchParams.get('itemTypeId') ?? undefined;
    const id = searchParams.get('id') ?? undefined;

    const response = await getDbItemTypes({ itemCategoryId, id });

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    // In case of an error, return an error response with an appropriate status code
    return NextResponse.error().status;
  }
}

export { GET };
