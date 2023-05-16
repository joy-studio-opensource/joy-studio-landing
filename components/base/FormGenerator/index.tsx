'use client'

// React
import { memo } from 'react'

// Components
import { FormGeneratorItem, FormDynamicItem } from './components'
import BaseRow from '@/components/base/Row'
import BaseCol from '@/components/base/Col'

// Types
import { TFormGeneratorItems } from '@/types'

const BaseFormGenerator = memo((props: TFormGeneratorItems) => {
  return (
    <>
      {props.cols.map((col, colIndex) =>
        col.isDynamicForm ? (
          <FormDynamicItem key={colIndex} form={col} />
        ) : (
          <BaseCol key={colIndex} {...col.colProps}>
            {col.isSingleRow ? (
              <BaseRow {...col.rowProps}>
                {col.items.map((colItem, colItemIndex) => (
                  <BaseCol key={colItemIndex} {...colItem.colProps}>
                    <FormGeneratorItem key={colItemIndex} {...colItem} />
                  </BaseCol>
                ))}
              </BaseRow>
            ) : (
              col.items.map((colItem, colItemIndex) => (
                <BaseRow key={colItemIndex} {...props.rowProps}>
                  <BaseCol {...col.colProps}>
                    <FormGeneratorItem key={colItemIndex} {...colItem} />
                  </BaseCol>
                </BaseRow>
              ))
            )}
          </BaseCol>
        )
      )}
    </>
  )
})

BaseFormGenerator.displayName = 'BaseFormGenerator'

export default BaseFormGenerator
