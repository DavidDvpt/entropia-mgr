import {
  createDbItemCategory,
  getDbItemCategories,
} from '@/modules/itemCategory/dbItemCategory';
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

async function POST(req: Request) {
  try {
    const body = await req.json();
    const newCategory = await createDbItemCategory(body);
    return NextResponse.json(newCategory, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Erreur à la création' },
      { status: 500 }
    );
  }
}

export { GET, POST };
