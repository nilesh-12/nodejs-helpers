export const equipment_finance_123000062 = {
  form: {
    name: '123000062',
    label: 'Equipment Finance',
    validationRun: 'onBlur',
    render: {
      renderType: 'stepper',
      groups: { '0': 'Personal Details', '1': 'Contact Details' },
      ordering: 'sequence'
    }
  },
  fields: [
    // Personal Details

    { render: { componentType: 'hidden', group: 0 }, name: 'flag' },
    {
      render: { componentType: 'textField', group: 0 },
      name: 'sourceName',
      label: 'Source',
      placeholder: 'Source',
      required: true,
      validate: 'getValidateValue',
      isReadOnly: true,
      dependentFields: ['flag'],
      shouldExclude: (_, dependentValues) => {
        if (dependentValues?.flag?.value === 'B2B') {
          return false;
        }
        return true;
      },
      fullWidth: true,
      GridProps: { xs: 12, md: 3, sm: 3 }
    },
    {
      render: { componentType: 'select', group: 0 },
      sequence: 1,
      name: 'source',
      label: 'Source',
      placeholder: 'Source',
      required: true,
      validate: 'getValidateValue',
      defaultValue: '1',
      __VIEW__: { options: 'getAllSourcelist', isReadOnly: true },
      __EDIT__: { options: 'getAllSourcelist', isReadOnly: true },
      __NEW__: { options: 'getInquirySourceByUserId' },
      dependentFields: ['flag'],
      shouldExclude: (_, dependentValues) => {
        if (dependentValues?.flag?.value !== 'B2B') {
          return false;
        }
        return true;
      },
      fullWidth: true,
      disableCaching: true,
      GridProps: { xs: 12, md: 3, sm: 3 }
    },
    {
      render: { componentType: 'select', group: 0 },
      sequence: 2,
      name: 'partnerAndAlliancesCode',
      label: 'Partner And Alliances Name',
      placeholder: 'Partner And Alliances Name',
      required: true,
      validate: 'getValidateValue',
      defaultValue: '00',
      options: 'getPartnerAndAlliancesName',
      _optionsKey: 'getPartnerAndAlliancesName',
      dependentFields: ['source'],
      shouldExclude: (_, dependentValues) => {
        if (dependentValues?.source?.value === '8') {
          return false;
        }
        return true;
      },
      fullWidth: true,
      disableCaching: true,
      GridProps: { xs: 12, md: 3, sm: 3 }
    },
    {
      render: { componentType: 'textField', group: 0 },
      sequence: 3,
      name: 'otherDescription',
      label: 'Reference',
      placeholder: 'Reference',
      dependentFields: ['source'],
      shouldExclude: {
        conditions: {
          any: [
            {
              fact: 'dependentFields',
              path: '$.source.value',
              operator: 'equal',
              value: '1'
            }
          ]
        },
        success: false,
        failure: true
      },
      __VIEW__: { isReadOnly: true },
      __EDIT__: { isReadOnly: true },
      maxLength: 100,
      fullWidth: true,
      GridProps: { xs: 12, md: 3, sm: 3 }
    },
    {
      render: { componentType: 'autocomplete', group: 0 },
      sequence: 4,
      name: 'employeeUserName',
      label: 'Select Employee',
      placeholder: 'Select Employee',
      required: true,
      validate: 'getValidateValue',
      defaultValue: '00',
      options: 'getAllRegisteredUsersList',
      dependentFields: ['source'],
      enableVirtualized: true,
      shouldExclude: {
        conditions: {
          any: [
            {
              fact: 'dependentFields',
              path: '$.source.value',
              operator: 'equal',
              value: '3'
            }
          ]
        },
        success: false,
        failure: true
      },
      __VIEW__: { isReadOnly: true },
      __EDIT__: { isReadOnly: true },
      fullWidth: true,
      disableCaching: true,
      GridProps: { xs: 12, md: 3, sm: 3 }
    },
    {
      render: { componentType: 'autocomplete', group: 0 },
      sequence: 5,
      name: 'partnerUserName',
      placeholder: 'Select IDC',
      label: 'Select IDC',
      required: true,
      validate: 'getValidateValue',
      defaultValue: '00',
      options: 'getPartnerList',
      dependentFields: ['source'],
      enableVirtualized: true,
      shouldExclude: {
        conditions: {
          any: [
            {
              fact: 'dependentFields',
              path: '$.source.value',
              operator: 'equal',
              value: '4'
            }
          ]
        },
        success: false,
        failure: true
      },
      __VIEW__: { isReadOnly: true },
      __EDIT__: { isReadOnly: true },
      fullWidth: true,
      disableCaching: true,
      GridProps: { xs: 12, md: 3, sm: 3 }
    },
    {
      render: { componentType: 'select', group: 0 },
      sequence: 6,
      name: 'productType',
      label: 'Product Type',
      placeholder: 'Product Type',
      required: true,
      validate: 'getValidateValue',
      defaultValue: '00',
      options: 'getProductTypeNBFC',
      postValidationSetCrossFieldValues: 'setInquiryMinMaxProductCap',
      __VIEW__: { isReadOnly: false },
      __EDIT__: { isReadOnly: true },
      __NEW__: { isReadOnly: false },
      fullWidth: true,
      GridProps: { xs: 12, md: 3, sm: 3 }
    },
    {
      render: { componentType: 'hidden', group: 0 },
      sequence: 7,
      name: 'minProductCap'
    },
    {
      render: { componentType: 'hidden', group: 0 },
      sequence: 8,
      name: 'maxProductCap'
    },
    {
      render: { componentType: 'currencyWithLeadingZeros', group: 0 },
      sequence: 9,
      name: 'loanAmount',
      label: 'Your Desired Loan Amount',
      placeholder: 'Your Desired Loan Amount',
      required: true,
      validate: 'validateProductAmtLimit',
      dependentFields: ['minProductCap', 'maxProductCap'],
      validationRun: 'all',
      schemaValidation: {
        type: 'string',
        rules: [{ name: 'required', params: ['This Field is required.'] }]
      },
      fullWidth: true,
      GridProps: { xs: 12, md: 3, sm: 3 }
    },
    {
      render: { componentType: 'select', group: 0 },
      sequence: 10,
      name: 'loanType',
      label: 'Loan Type',
      placeholder: 'Loan Type',
      required: true,
      validate: 'getValidateValue',
      isReadOnly: true,
      defaultValue: '01',
      options: 'getLoanType',
      fullWidth: true,
      GridProps: { xs: 12, md: 3, sm: 3 }
    },
    {
      render: { componentType: 'select', group: 0 },
      sequence: 11,
      name: 'equipmentType',
      label: 'Equipment Type',
      placeholder: 'Equipment Type',
      required: true,
      validate: 'getValidateValue',
      defaultValue: '00',
      postValidationSetCrossFieldValues: 'setSolarSubTypeNull',
      options: 'getMainEquipmentType',
      __VIEW__: { isReadOnly: false },
      __EDIT__: { isReadOnly: true },
      __NEW__: { isReadOnly: false },
      fullWidth: true,
      GridProps: { xs: 12, md: 3, sm: 3 }
    },
    {
      render: { componentType: 'select', group: 0 },
      sequence: 12,
      name: 'solarSubType',
      label: 'Solar Equipment Type',
      placeholder: 'Solar Equipment Type',
      required: true,
      validate: 'getValidateValue',
      defaultValue: '00',
      options: 'getEquipmentType',
      multiple: true,
      showCheckbox: true,
      dependentFields: ['equipmentType'],
      shouldExclude: (_, dependentValues) => {
        if (dependentValues['equipmentType']?.value === '01') {
          return false;
        }
        return true;
      },
      fullWidth: true,
      GridProps: { xs: 12, md: 3, sm: 3 }
    },
    {
      render: { componentType: 'select', group: 0 },
      sequence: 13,
      name: 'supplierCategory',
      label: 'Supplier Category',
      placeholder: 'Supplier Category',
      required: true,
      validate: 'getValidateValue',
      defaultValue: '00',
      options: 'getSupplierCategory',
      dependentFields: ['productType'],
      shouldExclude: (_, dependentValues) => {
        if (dependentValues?.productType?.value === '123400104') {
          return false;
        }
        return true;
      },
      fullWidth: true,
      GridProps: { xs: 12, md: 3, sm: 3 }
    },
    {
      render: { componentType: 'select', group: 0 },
      sequence: 14,
      name: 'supplierRefID',
      label: 'Supplier Name',
      placeholder: 'Supplier Name',
      required: true,
      validate: 'getValidateValue',
      options: 'getEquipmentSupplierName',
      dependentFields: [
        'supplierCategory',
        'equipmentType',
        'productType',
        'solarSubType'
      ],
      shouldExclude: (_, dependentValues) => {
        if (dependentValues?.productType?.value === '123400104') {
          return false;
        }
        return true;
      },
      fullWidth: true,
      disableCaching: true,
      GridProps: { xs: 12, md: 3, sm: 3 }
    },
    {
      render: { componentType: 'textField', group: 0 },
      sequence: 15,
      name: 'supplierName',
      label: 'Supplier Name',
      placeholder: 'Supplier Name',
      required: true,
      validate: 'getValidateValue',
      dependentFields: ['productType'],
      shouldExclude: (_, dependentValues) => {
        if (dependentValues?.productType?.value === '123400105') {
          return false;
        }
        return true;
      },
      maxLength: 50,
      fullWidth: true,
      GridProps: { xs: 12, md: 3, sm: 3 }
    },
    {
      render: { componentType: 'select', group: 0 },
      sequence: 16,
      name: 'salutation',
      label: 'Salutation',
      placeholder: 'Salutation',
      required: true,
      validate: 'getValidateValue',
      defaultValue: '00',
      options: 'getSalutation',
      // postValidationSetCrossFieldValues: "getGenderValue",
      fullWidth: true,
      GridProps: { xs: 12, md: 3, sm: 3 }
    },
    {
      render: { componentType: 'individualPancardOptional', group: 0 },
      sequence: 17,
      name: 'panNumber',
      label: 'Individual PAN No.',
      placeholder: 'Individual PAN No.',
      postValidationSetCrossFieldValues: 'validatePanNumberNew',
      fullWidth: true,
      GridProps: { xs: 12, md: 3, sm: 3 }
    },
    {
      render: { componentType: 'hidden', group: 0 },
      sequence: 18,
      name: 'flag'
    },
    {
      render: { componentType: 'hidden', group: 0 },
      sequence: 19,
      name: 'message'
    },
    { render: { componentType: 'hidden', group: 0 }, sequence: 20, name: 'id' },
    {
      render: { componentType: 'hidden', group: 0 },
      sequence: 21,
      name: 'name'
    },
    {
      render: { componentType: 'textField', group: 0 },
      sequence: 22,
      name: 'firstName',
      label: 'First Name[As Per PAN Card]',
      placeholder: 'First Name[As Per PAN Card]',
      required: true,
      validate: (_, dependentFields) => {
        if (dependentFields?.flag?.value === 'F') {
          return dependentFields?.message?.value;
        }
        return '';
      },
      schemaValidation: {
        type: 'string',
        rules: [{ name: 'required', params: ['This Field is required.'] }]
      },
      dependentFields: ['flag', 'message'],
      isReadOnly: (_, dependentFields) => {
        if (dependentFields?.flag?.value === 'S') {
          return true;
        }
        return false;
      },
      maxLength: 50,
      fullWidth: true,
      GridProps: { xs: 12, md: 3, sm: 3 }
    },
    {
      render: { componentType: 'textField', group: 0 },
      sequence: 23,
      name: 'middleName',
      label: 'Middle Name',
      placeholder: 'Middle Name',
      dependentFields: ['flag'],
      isReadOnly: (_, dependentFields) => {
        if (dependentFields?.flag?.value === 'S') {
          return true;
        }
        return false;
      },
      maxLength: 50,
      fullWidth: true,
      GridProps: { xs: 12, md: 3, sm: 3 }
    },
    {
      render: { componentType: 'textField', group: 0 },
      sequence: 24,
      name: 'lastName',
      label: 'Last Name',
      placeholder: 'Last Name',
      required: true,
      schemaValidation: {
        type: 'string',
        rules: [{ name: 'required', params: ['This Field is required.'] }]
      },
      dependentFields: ['flag'],
      isReadOnly: (_, dependentFields) => {
        if (dependentFields?.flag?.value === 'S') {
          return true;
        }
        return false;
      },
      maxLength: 50,
      fullWidth: true,
      GridProps: { xs: 12, md: 3, sm: 3 }
    },
    {
      render: { componentType: 'select', group: 0 },
      sequence: 25,
      name: 'gender',
      label: 'Gender',
      placeholder: 'Gender',
      required: true,
      validate: 'getValidateValue',
      defaultValue: '00',
      options: 'getGenderList',
      dependentFields: ['flag'],
      fullWidth: true,
      GridProps: { xs: 12, md: 3, sm: 3 }
    },
    {
      render: { componentType: 'dob', group: 0 },
      sequence: 26,
      name: 'dob',
      label: 'Date Of Birth',
      placeholder: 'dd/mm/yyyy',
      format: 'dd/MM/yyyy',
      dependentFields: ['flag'],
      validationRun: 'all',
      fullWidth: true,
      GridProps: { xs: 12, md: 3, sm: 3 }
    },
    {
      render: { componentType: 'typography', group: 0 },
      sequence: 27,
      name: 'note',
      label: 'Note* : Please verify the information before submitting.',
      TypographyProps: {
        style: {
          fontStyle: 'italic',
          color: '#0c68B1',
          marginTop: '6px',
          fontSize: '1rem',
          fontFamily: 'Roboto',
          fontWeight: 700,
          lineHeight: '1.57',
          letterSpacing: '0.00714em'
        },
        variant: 'subtitle2'
      },
      GridProps: { xs: 12, md: 12, sm: 12 }
    },

    // Contact Details

    {
      render: { componentType: 'phoneNumber', group: 1 },
      sequence: 1,
      name: 'mobileNo',
      label: 'Mobile No.',
      placeholder: 'Mobile No.',
      StartAdornment: '+91',
      required: true,
      schemaValidation: {
        type: 'string',
        rules: [
          { name: 'required', params: ['This Field is required.'] },
          { name: 'min', params: [10, 'Mobile No should be 10 digit.'] },
          { name: 'max', params: [10, 'Mobile No should be 10 digit.'] }
        ]
      },
      fullWidth: true,
      GridProps: { xs: 12, md: 3, sm: 3 }
    },
    {
      render: { componentType: 'email', group: 1 },
      sequence: 2,
      type: 'email',
      name: 'email',
      label: 'Email',
      placeholder: 'Email',
      maxLength: 100,
      fullWidth: true,
      GridProps: { xs: 12, md: 3, sm: 3 }
    },
    {
      render: { componentType: 'textField', group: 1 },
      sequence: 3,
      type: 'text',
      name: 'address',
      label: 'Address',
      placeholder: 'Address',
      maxLength: 40,
      showMaxLength: true,
      fullWidth: true,
      GridProps: { xs: 12, md: 3, sm: 3 }
    },
    {
      render: { componentType: 'textField', group: 1 },
      sequence: 4,
      name: 'landmark',
      label: 'Landmark',
      placeholder: 'Landmark',
      maxLength: 100,
      fullWidth: true,
      GridProps: { xs: 12, md: 3, sm: 3 }
    },
    {
      render: { componentType: 'pincode', group: 1 },
      sequence: 5,
      name: 'pincode',
      label: 'Residence Pincode',
      placeholder: 'Residence Pincode',
      required: true,
      validate: 'getValidateValuePincode',
      postValidationSetCrossFieldValues: 'postValidationSetPincodeDtl',
      runPostValidationHookAlways: true,
      dependentFields: ['flag'],
      __VIEW__: { isReadOnly: false },
      __EDIT__: { isReadOnly: true },
      __NEW__: { isReadOnly: false },
      fullWidth: true,
      GridProps: { xs: 12, md: 3, sm: 3 }
    },
    {
      render: { componentType: 'select', group: 1 },
      sequence: 6,
      name: 'location',
      label: 'Location',
      placeholder: 'Location',
      required: true,
      validate: 'getValidateValue',
      dependentFields: ['pincode'],
      defaultValue: '00',
      options: 'getPincode',
      postValidationSetCrossFieldValues: 'postValidationSetLocationDtl',
      disableCaching: true,
      fullWidth: true,
      GridProps: { xs: 12, md: 3, sm: 3 }
    },
    {
      render: { componentType: 'textField', group: 1 },
      sequence: 7,
      name: 'city',
      label: 'City',
      placeholder: 'City',
      required: true,
      validate: 'getValidateValue',
      __VIEW__: { isReadOnly: false },
      __EDIT__: { isReadOnly: true },
      __NEW__: { isReadOnly: false },
      maxLength: 100,
      fullWidth: true,
      GridProps: { xs: 12, md: 3, sm: 3 }
    },
    {
      render: { componentType: 'textField', group: 1 },
      sequence: 8,
      name: 'district',
      label: 'District',
      placeholder: 'District',
      isReadOnly: true,
      fullWidth: true,
      GridProps: { xs: 12, md: 3, sm: 3 }
    },
    {
      render: { componentType: 'textField', group: 1 },
      sequence: 9,
      name: 'state',
      label: 'State',
      placeholder: 'State',
      isReadOnly: true,
      fullWidth: true,
      GridProps: { xs: 12, md: 3, sm: 3 }
    },
    {
      render: { componentType: 'textField', group: 1 },
      sequence: 10,
      name: 'country',
      label: 'Country',
      placeholder: 'Country',
      isReadOnly: true,
      fullWidth: true,
      GridProps: { xs: 12, md: 3, sm: 3 }
    },
    {
      render: { componentType: 'select', group: 1 },
      sequence: 11,
      name: 'employementStatus',
      label: 'How Are You Currently Employed',
      placeholder: 'How Are You Currently Employed',
      required: true,
      validate: 'getValidateValue',
      defaultValue: '00',
      options: 'getUnsecuredEmployee',
      fullWidth: true,
      GridProps: { xs: 12, md: 3, sm: 3 }
    },
    {
      render: { componentType: 'textField', group: 1 },
      sequence: 12,
      name: 'firmName',
      label: 'Firm Name As Per Records',
      placeholder: 'Firm Name As Per Records',
      required: true,
      schemaValidation: {
        type: 'string',
        rules: [{ name: 'required', params: ['This Field is required.'] }]
      },
      maxLength: 150,
      fullWidth: true,
      GridProps: { xs: 12, md: 3, sm: 3 }
    },
    {
      render: { componentType: 'typography', group: 1 },
      name: 'note1',
      sequence: 13,
      label:
        'If employment type is Individual then please select SELF EMPLOYED PROFESSIONAL',
      TypographyProps: {
        style: {
          fontStyle: 'italic',
          color: '#ff0033',
          marginTop: '6px',
          fontSize: '1rem',
          fontFamily: 'Roboto',
          fontWeight: 700,
          lineHeight: '1.57',
          letterSpacing: '0.00714em'
        },
        variant: 'subtitle2'
      },
      GridProps: { xs: 12, md: 12, sm: 12 }
    },
    {
      render: { componentType: 'typography', group: 1 },
      sequence: 14,
      name: 'note2',
      label: 'Note* : Please verify the information before submitting.',
      TypographyProps: {
        style: {
          fontStyle: 'italic',
          color: '#0c68B1',
          marginTop: '6px',
          fontSize: '1rem',
          fontFamily: 'Roboto',
          fontWeight: 700,
          lineHeight: '1.57',
          letterSpacing: '0.00714em'
        },
        variant: 'subtitle2'
      },
      GridProps: { xs: 12, md: 12, sm: 12 }
    }
  ]
};
