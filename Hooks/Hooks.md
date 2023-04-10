
# Hooks

import {
    useState,
    useEffect,
    useLayoutEffect,
    useRef,
    useCallback,
    useMemo,
    useReducer,
    useContext,
    useImperativeHandler,
    useDebugValue,
} from 'react'

- Tất cả hook là hàm

- Sử dụng cho function components
- Làm component đơn giản, dễ hiểu hơn 

## useState
- Thể hiện trạng thái dữ liệu ra giao diện
- Dùng khi muốn dữ liệu thay đổi thì gió diện tự render lại theo dữ liệu

### Ex

```jsx
import { useState } from 'react'

function Component() {
    const [state, setState] = useState(initState)
}

```

- nhận vào initState - giá trị khởi tạo
- return 1 mảng gồm 2 phần tử
+ state - ở lần đầu thì state = initState
+ setState - 1 hàm được sử dụng để set lại state

###  Notice
- Component được re-render sau khi `setState`
- Initial state chỉ được dùng cho lần đầu
- Initial state có thể nhận vào 1 obj, 1 function,... -> state sẽ lấy giá trị
- Set state là thay thế state với giá trị mới
