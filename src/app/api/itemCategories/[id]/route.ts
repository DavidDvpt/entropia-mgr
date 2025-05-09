import {
  deleteDbItemCategory,
  updateDbItemCategory,
} from '@/modules/itemCategory/dbItemCategory';
import { NextRequest, NextResponse } from 'next/server';

async function PUT(req: NextRequest, context: { params: { id: string } }) {
  try {
    const id = context.params.id;

    if (!id || typeof id !== 'string') {
      return NextResponse.json(
        { message: 'Paramètre id manquant ou invalide' },
        { status: 400 }
      );
    }
    const body = await req.json();

    const updated = await updateDbItemCategory(id, body);
    return NextResponse.json(updated, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Erreur à la mise à jour' },
      { status: 500 }
    );
  }
}

async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  try {
    await deleteDbItemCategory(params.id);
    return NextResponse.json({ message: 'Supprimé' }, { status: 204 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Erreur à la suppression' },
      { status: 500 }
    );
  }
}
export { DELETE, PUT };
