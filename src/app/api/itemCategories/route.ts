import { getDbItemCategories } from '@/modules/itemCategory/dbItemCategory';
import { NextResponse } from 'next/server';

async function GET() {
  try {
    const response = await getDbItemCategories();

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    // In case of an error, return an error response with an appropriate status code
    return NextResponse.error().status;
  }
}

export { GET };
