import { Select } from 'antd';
import type { SelectProps } from 'antd/es/select';
import React from 'react';

interface SelectAntProps<T> extends SelectProps<T> {
  className: string;
  label: string;
}

function SelectAnt<T>({
  className,
  label,
  options,
  ...selectProps
}: SelectAntProps<T>) {
  return (
    <div className={className}>
      <p className="text-sm font-bold">{label}</p>
      <Select className="w-full" {...selectProps} options={options} />
    </div>
  );
}

export default SelectAnt;
