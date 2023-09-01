import 'styled-components'

import { CommonStyleType } from '../constants/commonStyle'
import { FontSizeType } from './../constants/fontSize'
import { ColorType } from '../constants/colors'
import { FlexType } from '../constants/flex'

declare module 'styled-components' {
  interface DefaultTheme extends ExtendedTheme {
    commonStyles: CommonStyleType
    fontSizes: FontSizeType
    colors: ColorType
    flex: FlexType
  }
}
