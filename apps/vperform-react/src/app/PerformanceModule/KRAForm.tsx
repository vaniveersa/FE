import React, { useState } from 'react';
import InputField from 'apps/ui-lib/src/lib/InputField';

const KRAForm = () => {
  return (
    <>
      <div className="flex flex-row items-start justify-start gap-6 pl-6 w-full mb-6">
        <div className="w-full">
          <InputField width={'1/2'} label={'KRA'} placeholder={'Enter Title'} />
        </div>
        <div className="w-full">
          <InputField
            width={'1/2'}
            label={'Stream'}
            placeholder={'Select Stream'}
          />
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-6 pl-6 w-full mb-6">
        <div className="w-full">
          <InputField
            width={'1/2'}
            label={'Job Title'}
            placeholder={'Select Job Title'}
          />
        </div>
        <div className="w-full">
          <InputField
            width={'1/2'}
            label={'Weightage'}
            placeholder={'Enter Weightage'}
          />
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-6 pl-6 w-full">
        <div className="w-full">
          <InputField
            width={'7/8'}
            label={'Description'}
            placeholder={'Enter Description'}
          />
        </div>
      </div>
    </>
  );
};

export default KRAForm;
