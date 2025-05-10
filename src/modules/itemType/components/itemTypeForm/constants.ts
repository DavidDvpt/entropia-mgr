import { apiErrorMessages } from '@/lib/errorMgr/apiErrorMessages';
import ErrorKeyEnum from '@/lib/errorMgr/ErrorKeyEnum';
import {
  defaultObjectBaseValue,
  objectBaseFormSchema,
} from '@/shared/components/form/ObjectBaseForm/constants';
import z from 'zod';
const defaultItemTypeFormInitialValues = {
  ...defaultObjectBaseValue,
  itemCategoryId: '',
};

const itemTypeformSchema = objectBaseFormSchema.extend({
  itemCategoryId: z
    .string()
    .nonempty(
      apiErrorMessages.common[ErrorKeyEnum.itemCategoryIdRequired]?.user
    ),
});

export { defaultItemTypeFormInitialValues, itemTypeformSchema };
