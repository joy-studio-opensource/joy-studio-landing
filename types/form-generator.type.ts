// Antd
import { FormItemProps } from 'antd'
import { FormListProps } from 'antd/es/form'

// Constants
import { E_FORM_GENERATOR_TYPE } from '@/constants'

// Types
import { TBaseFormInputProps } from '@/components/base/form/Input/types'
import { TBaseFormDatePickerProps } from '@/components/base/form/DatePicker/types'
import { TBaseFormInputPasswordProps } from '@/components/base/form/InputPassword/types'
import { TBaseRowProps } from '@/components/base/Row/types'
import { TBaseColProps } from '@/components/base/Col/types'
import { TBaseFormSelectProps } from '@/components/base/form/Select/types'
import { TBaseFormTextAreaProps } from '@/components/base/form/TextArea/types'
import { TBaseFormCheckboxProps } from '@/components/base/form/Checkbox/types'
import { TBaseFormSwitchProps } from '@/components/base/form/Switch/types'

interface FormItem<T extends { type: E_FORM_GENERATOR_TYPE; props: unknown }> {
  type: T['type']
  formItemProps: FormItemProps
  props: T['props']
  colProps?: TBaseColProps
}

type TFormInputProps = FormItem<{
  type: E_FORM_GENERATOR_TYPE.INPUT
  props: TBaseFormInputProps & TBaseColProps
}>

type TFormInputPasswordProps = FormItem<{
  type: E_FORM_GENERATOR_TYPE.PASSWORD
  props: TBaseFormInputPasswordProps & TBaseColProps
}>

type TFormDatePickerProps = FormItem<{
  type: E_FORM_GENERATOR_TYPE.DATE_PICKER
  props: TBaseFormDatePickerProps & TBaseColProps
}>

type TFormSelectProps = FormItem<{
  type: E_FORM_GENERATOR_TYPE.SELECT
  props: TBaseFormSelectProps & TBaseColProps
}>

type TFormTextAreaProps = FormItem<{
  type: E_FORM_GENERATOR_TYPE.TEXT_AREA
  props: TBaseFormTextAreaProps & TBaseColProps
}>

type TFormCheckboxProps = FormItem<{
  type: E_FORM_GENERATOR_TYPE.CHECKBOX
  props: TBaseFormCheckboxProps & TBaseColProps
}>

type TFormSwitchProps = FormItem<{
  type: E_FORM_GENERATOR_TYPE.SWITCH
  props: TBaseFormSwitchProps & TBaseColProps
}>

export type TFormGeneratorItemType =
  | TFormInputProps
  | TFormInputPasswordProps
  | TFormDatePickerProps
  | TFormSelectProps
  | TFormTextAreaProps
  | TFormCheckboxProps
  | TFormSwitchProps

export type TFormGeneratorCol = {
  rowProps?: TBaseRowProps
  colProps?: TBaseColProps
  formListProps?: {
    label?: string
    attrs: Omit<FormListProps, 'children'>
  }
  isSingleRow?: boolean
  isDynamicForm?: boolean
  items: TFormGeneratorItemType[]
}

export type TFormGeneratorItems = {
  rowProps?: TBaseRowProps
  cols: TFormGeneratorCol[]
}
