import * as React from 'react';

import {StyledInput , InputWrapper} from './styled.Input';

export interface Props {
  name?: string
  value? : string
  placeholder? : string
  onChange?: (value : string) => void
}

export function Input({ name, onChange , placeholder , value }: Props) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      let userValue = e?.target?.value;
      onChange && onChange(userValue);
  }
  
  return (
    <InputWrapper>
      <StyledInput type='text' value={value} name={name} placeholder={placeholder || ''} onChange={handleChange} color={'#828282'} />
    </InputWrapper>
  );
}
