import type { RangePickerProps } from 'antd/es/date-picker';
import React from 'react';

const InternalRangePicker: React.ForwardRefRenderFunction<
  any,
  RangePickerProps
> = () => {
  return <div>11</div>;
};

export default React.forwardRef(InternalRangePicker);
