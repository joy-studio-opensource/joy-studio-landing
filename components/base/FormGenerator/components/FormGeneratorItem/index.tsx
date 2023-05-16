'use client'

// React
import { memo } from 'react'

// Components
import {
  BaseFormCheckbox,
  BaseFormDatePicker,
  BaseFormInput,
  BaseFormInputPassword,
  BaseFormItem,
  BaseFormSelect,
  BaseFormTextArea
} from '@/components/base/form'

// Constants
import { E_FORM_GENERATOR_TYPE } from '@/constants'

// Types
import { TFormGeneratorItemType } from '@/types'

const FormGeneratorItem = memo((item: TFormGeneratorItemType) => {
  return (
    <BaseFormItem {...item.formItemProps}>
      {item.type === E_FORM_GENERATOR_TYPE.INPUT ? (
        <BaseFormInput {...item.props} />
      ) : item.type === E_FORM_GENERATOR_TYPE.PASSWORD ? (
        <BaseFormInputPassword {...item.props} />
      ) : item.type === E_FORM_GENERATOR_TYPE.DATE_PICKER ? (
        <BaseFormDatePicker {...item.props} />
      ) : item.type === E_FORM_GENERATOR_TYPE.SELECT ? (
        <BaseFormSelect {...item.props} />
      ) : item.type === E_FORM_GENERATOR_TYPE.TEXT_AREA ? (
        <BaseFormTextArea {...item.props} />
      ) : item.type === E_FORM_GENERATOR_TYPE.CHECKBOX ? (
        <BaseFormCheckbox {...item.props} />
      ) : (
        <></>
      )}
    </BaseFormItem>
  )
})

FormGeneratorItem.displayName = 'FormGeneratorItem'

export default FormGeneratorItem
