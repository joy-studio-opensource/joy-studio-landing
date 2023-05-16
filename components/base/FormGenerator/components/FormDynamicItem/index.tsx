'use client'

// React
import { memo } from 'react'

// Antd
import { Form } from 'antd'

// Components
import { BaseFormItem } from '@/components/base/form'
import { BaseButton, BaseRow, BaseCol, BaseTitle } from '@/components/base'
import FormGeneratorItem from '@/components/base/FormGenerator/components/FormGeneratorItem'

// Types
import { TFormDynamicItemProps } from './types'

const FormDynamicItem = memo(({ form }: TFormDynamicItemProps) => {
  return (
    <Form.List {...form.formListProps!.attrs}>
      {(fields, { add, remove }, { errors }) => {
        return (
          <>
            {form.formListProps?.label && (
              <BaseTitle level={5}>{form.formListProps.label}</BaseTitle>
            )}

            {fields.map(({ name, key, ...restField }) => (
              <>
                <BaseCol {...form.colProps} key={key}>
                  {form.isSingleRow ? (
                    <BaseRow
                      {...form.rowProps}
                      style={{ marginBottom: 10, ...form.rowProps?.style }}
                    >
                      {form.items.map((colItem, colItemIndex) => (
                        <BaseCol key={colItemIndex} {...colItem.colProps}>
                          <FormGeneratorItem
                            {...colItem}
                            formItemProps={{
                              ...colItem.formItemProps,
                              ...restField,
                              name: [name, colItem.formItemProps.name as string]
                            }}
                          />
                        </BaseCol>
                      ))}
                      <BaseCol flex={'auto'}>
                        <BaseButton
                          type='dashed'
                          onClick={() => remove(name)}
                          block
                        >
                          Remove
                        </BaseButton>
                      </BaseCol>
                    </BaseRow>
                  ) : (
                    form.items.map((colItem, colItemIndex) => (
                      <BaseRow
                        key={colItemIndex}
                        {...form.rowProps}
                        style={{ marginBottom: 10, ...form.rowProps?.style }}
                      >
                        <BaseCol {...form.colProps}>
                          <FormGeneratorItem
                            {...colItem}
                            formItemProps={{
                              ...colItem.formItemProps,
                              ...restField,
                              name: [name, colItem.formItemProps.name as string]
                            }}
                          />
                        </BaseCol>
                      </BaseRow>
                    ))
                  )}
                </BaseCol>
              </>
            ))}

            <BaseFormItem>
              {/* Render Error */}
              <Form.ErrorList errors={errors} />

              {/* Add Button */}
              <BaseButton type='dashed' onClick={() => add()} block>
                Add Field
              </BaseButton>
            </BaseFormItem>
          </>
        )
      }}
    </Form.List>
  )
})

FormDynamicItem.displayName = 'FormDynamicItem'

export default FormDynamicItem
