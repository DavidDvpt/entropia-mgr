import { apiErrorMessages } from '@/lib/errorMgr/apiErrorMessages';
import ErrorKeyEnum from '@/lib/errorMgr/ErrorKeyEnum';
import z from 'zod';

const defaultItemCategoryValue = { name: '', isActive: true };

const itemCategoryFormSchema = z.object({
  name: z
    .string()
    .nonempty(apiErrorMessages.common[ErrorKeyEnum.nameRequired]?.user),
  isActive: z.boolean().optional(),
});

export { defaultItemCategoryValue, itemCategoryFormSchema };
