export const consumer_education_fee_123000068 = {
  form: {
    name: '123000068',
    label: 'RF Education Fee',
    validationRun: 'onBlur',
    render: {
      renderType: 'stepper',
      groups: { '0': 'Personal Details', '1': 'Contact Details' },
      ordering: 'sequence'
    }
  },
  fields: [
    {
      render: { componentType: 'select', group: 0 },
      name: 'source',
      sequence: 1,
      label: 'Source',
      placeholder: 'Source',
      defaultValue: '1',
      GridProps: { xs: 12, md: 3, sm: 3 },
      fullWidth: true,
      required: true,
      validate: 'getValidateValue',
      disableCaching: true,
      __VIEW__: { options: 'getAllSourcelist', isReadOnly: true },
      __EDIT__: { options: 'getAllSourcelist', isReadOnly: true },
      __NEW__: { options: 'getSourcelist' }
    },
    {
      render: { componentType: 'select', group: 0 },
      name: 'partnerAndAlliancesCode',
      sequence: 1.1,
      label: 'Partner And Alliances Name',
      defaultValue: '00',
      dependentFields: ['source'],
      shouldExclude: (_, dependentValues) => {
        if (dependentValues?.source?.value === '8') {
          return false;
        }
        return true;
      },
      GridProps: { xs: 12, md: 3, sm: 3 },
      options: 'getPartnerAndAlliancesName',
      _optionsKey: 'getPartnerAndAlliancesName',
      fullWidth: true,
      required: true,
      validate: 'getValidateValue',
      disableCaching: 'true'
    },
    {
      render: { componentType: 'textField', group: 0 },
      name: 'otherDescription',
      sequence: 2,
      label: 'Reference',
      placeholder: 'Reference',
      defaultValue: '',
      dependentFields: ['source'],
      maxLength: 100,
      GridProps: { xs: 12, md: 3, sm: 3 },
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
      fullWidth: true,
      __VIEW__: { isReadOnly: true },
      __EDIT__: { isReadOnly: true }
    },
    {
      render: { componentType: 'autocomplete', group: 0 },
      name: 'employeeUserName',
      sequence: 3,
      label: 'Select Employee',
      placeholder: 'Select Employe',
      defaultValue: '00',
      required: true,
      dependentFields: ['source'],
      options: 'getAllRegisteredUsersList',
      disableCaching: true,
      enableVirtualized: true,
      fullWidth: true,
      GridProps: { xs: 12, md: 3, sm: 3 },
      validate: 'getValidateValue',
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
      __EDIT__: { isReadOnly: true }
    },
    {
      render: { componentType: 'autocomplete', group: 0 },
      name: 'partnerUserName',
      placeholder: 'Select IDC',
      label: 'Select IDC',
      defaultValue: '00',
      sequence: 4,
      dependentFields: ['source'],
      options: 'getPartnerList',
      required: true,
      disableCaching: true,
      enableVirtualized: true,
      GridProps: { xs: 12, md: 3, sm: 3 },
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
      fullWidth: true,
      validate: 'getValidateValue',
      __VIEW__: { isReadOnly: true },
      __EDIT__: { isReadOnly: true }
    },
    {
      render: { componentType: 'select', group: 0 },
      name: 'salutation',
      sequence: 5,
      label: 'Salutation',
      placeholder: 'Salutation',
      isReadOnly: false,
      required: true,
      defaultValue: '00',
      GridProps: { xs: 12, md: 3, sm: 3 },
      options: 'getSalutation',
      validate: 'getValidateValue',
      // postValidationSetCrossFieldValues: "getGenderValue",
      fullWidth: true
    },
    {
      render: {
        componentType: 'individualPancardOptional',
        group: 0
      },
      name: 'panNumber',
      sequence: 5.1,
      type: 'text',
      label: 'PAN No',
      placeholder: 'PAN No',
      postValidationSetCrossFieldValues: 'validatePanNumberNew',
      fullWidth: true,
      GridProps: {
        xs: 12,
        md: 3,
        sm: 3
      }
    },
    {
      render: {
        componentType: 'hidden',
        group: 0
      },
      name: 'flag',
      sequence: 5.2,
      type: 'text',
      label: 'Flag',
      placeholder: 'Flag',
      fullWidth: true,
      GridProps: {
        xs: 12,
        md: 3,
        sm: 3
      }
    },
    {
      render: {
        componentType: 'hidden',
        group: 0
      },
      name: 'message',
      sequence: 5.3,
      type: 'text',
      label: 'Message',
      placeholder: 'Message',
      fullWidth: true,
      GridProps: {
        xs: 12,
        md: 3,
        sm: 3
      }
    },
    {
      render: {
        componentType: 'hidden',
        group: 0
      },
      name: 'id',
      sequence: 5.4,
      type: 'text',
      label: 'ID',
      placeholder: 'ID',
      fullWidth: true,
      GridProps: {
        xs: 12,
        md: 3,
        sm: 3
      }
    },
    {
      render: {
        componentType: 'hidden',
        group: 0
      },
      name: 'name',
      sequence: 5.5,
      type: 'text',
      label: 'name',
      placeholder: 'name',
      fullWidth: true,
      GridProps: {
        xs: 12,
        md: 3,
        sm: 3
      }
    },
    {
      render: { componentType: 'textField', group: 0 },
      name: 'firstName',
      sequence: 6,
      type: 'text',
      label: 'First Name[As Per PAN Card]',
      dependentFields: ['flag', 'message'],
      isReadOnly: (_, dependentFields) => {
        if (dependentFields?.flag?.value === 'S') {
          return true;
        }
        return false;
      },
      required: true,
      placeholder: 'First Name[As Per PAN Card]',
      schemaValidation: {
        type: 'string',
        rules: [{ name: 'required', params: ['This Field is required.'] }]
      },
      GridProps: { xs: 12, md: 3, sm: 3 },
      fullWidth: true,
      maxLength: 50,
      validate: (_, dependentFields) => {
        if (dependentFields?.flag?.value === 'F') {
          return dependentFields?.message?.value;
        }
        return '';
      }
    },
    {
      render: { componentType: 'textField', group: 0 },
      name: 'middleName',
      sequence: 7,
      type: 'text',
      label: 'Middle Name',
      dependentFields: ['flag'],
      isReadOnly: (_, dependentFields) => {
        if (dependentFields?.flag?.value === 'S') {
          return true;
        }
        return false;
      },
      placeholder: 'Middle Name',
      GridProps: { xs: 12, md: 3, sm: 3 },
      fullWidth: true,
      maxLength: 50
    },
    {
      render: { componentType: 'textField', group: 0 },
      name: 'lastName',
      sequence: 8,
      type: 'text',
      label: 'Last Name',
      dependentFields: ['flag'],
      isReadOnly: (_, dependentFields) => {
        if (dependentFields?.flag?.value === 'S') {
          return true;
        }
        return false;
      },
      required: true,
      placeholder: 'Last Name',
      schemaValidation: {
        type: 'string',
        rules: [{ name: 'required', params: ['This Field is required.'] }]
      },
      GridProps: { xs: 12, md: 3, sm: 3 },
      fullWidth: true,
      maxLength: 50
    },
    {
      render: { componentType: 'select', group: 0 },
      name: 'gender',
      sequence: 9,
      label: 'Gender',
      placeholder: 'Gender',
      required: true,
      defaultValue: '00',
      dependentFields: ['flag'],
      GridProps: { xs: 12, md: 3, sm: 3 },
      options: 'getGenderList',
      validate: 'getValidateValue',
      // isReadOnly: false,
      fullWidth: true
    },
    {
      render: { componentType: 'datePicker', group: 0 },
      name: 'dob',
      sequence: 10,
      label: 'Date Of Birth',
      placeholder: 'dd/mm/yyyy',
      // isReadOnly: false,
      dependentFields: ['flag'],
      format: 'dd/MM/yyyy',
      GridProps: { xs: 12, md: 3, sm: 3 },
      validationRun: 'all',
      fullWidth: true
    },
    {
      render: { componentType: 'currencyWithLeadingZeros', group: 0 },
      name: 'loanAmount',
      sequence: 11,
      type: 'text',
      label: 'Your Desired Loan Amount',
      isReadOnly: false,
      required: true,
      placeholder: 'Your Desired Loan Amount',
      schemaValidation: {
        type: 'string',
        rules: [{ name: 'required', params: ['This Field is required.'] }]
      },
      GridProps: { xs: 12, md: 3, sm: 3 },
      validationRun: 'onChange',
      validate: 'validateLoanAmount',
      fullWidth: true
    },
    {
      render: { componentType: 'phoneNumber', group: 1 },
      name: 'mobileNo',
      sequence: 12,
      type: 'text',
      label: 'Mobile No.',
      isReadOnly: false,
      required: true,
      placeholder: 'Mobile No.',
      schemaValidation: {
        type: 'string',
        rules: [
          { name: 'required', params: ['This Field is required.'] },
          { name: 'min', params: [10, 'Mobile No should be 10 digit.'] },
          { name: 'max', params: [10, 'Mobile No should be 10 digit.'] }
        ]
      },
      GridProps: { xs: 12, md: 3, sm: 3 },
      StartAdornment: '+91',
      fullWidth: true
    },
    {
      render: { componentType: 'email', group: 1 },
      name: 'email',
      sequence: 13,
      type: 'email',
      label: 'Email',
      isReadOnly: false,
      placeholder: 'Email',
      GridProps: { xs: 12, md: 3, sm: 3 },
      fullWidth: true,
      maxLength: 100
    },
    {
      render: { componentType: 'select', group: 1 },
      name: 'employementStatus',
      sequence: 14,
      label: 'How Are You Currently Employed',
      placeholder: 'How Are You Currently Employed',
      isReadOnly: false,
      required: true,
      defaultValue: '00',
      GridProps: { xs: 12, md: 3, sm: 3 },
      options: 'getUnsecuredEmployee',
      validate: 'getValidateValue',
      fullWidth: true
    },
    {
      render: { componentType: 'textField', group: 1 },
      name: 'landmark',
      sequence: 17,
      type: 'text',
      label: 'Landmark',
      isReadOnly: false,
      required: false,
      placeholder: 'Landmark',
      GridProps: { xs: 12, md: 3, sm: 3 },
      fullWidth: true,
      maxLength: 100
    },
    {
      render: { componentType: 'pincode', group: 1 },
      name: 'pincode',
      sequence: 18,
      label: 'Residence Pincode',
      required: true,
      placeholder: 'Residence Pincode',
      schemaValidation: {
        type: 'string',
        rules: [
          { name: 'required', params: ['This Field is required.'] },
          { name: 'min', params: [6, 'Residence Pincode should be 6 digit.'] },
          { name: 'max', params: [6, 'Residence Pincode should be 6 digit.'] }
        ]
      },
      GridProps: { xs: 12, md: 3, sm: 3 },
      postValidationSetCrossFieldValues: 'postValidationSetPincodeDtl',
      fullWidth: true,
      dependentFields: ['flag'],
      __EDIT__: { isReadOnly: true },
      runPostValidationHookAlways: true
    },
    {
      render: { componentType: 'select', group: 1 },
      name: 'location',
      sequence: 19,
      defaultValue: '00',
      label: 'Location',
      isReadOnly: false,
      required: true,
      placeholder: 'Location',
      postValidationSetCrossFieldValues: 'postValidationSetLocationDtl',
      GridProps: { xs: 12, md: 3, sm: 3 },
      fullWidth: true,
      validate: 'getValidateValue',
      dependentFields: ['pincode'],
      options: 'getPincode',
      disableCaching: true
    },
    {
      render: { componentType: 'textField', group: 1 },
      name: 'city',
      sequence: 20,
      label: 'City',
      required: true,
      __VIEW__: { isReadOnly: false },
      __EDIT__: { isReadOnly: true },
      __NEW__: { isReadOnly: false },
      placeholder: 'City',
      validate: 'getValidateValue',
      GridProps: { xs: 12, md: 3, sm: 3 },
      fullWidth: true,
      maxLength: 100
    },
    {
      render: { componentType: 'textField', group: 1 },
      name: 'district',
      sequence: 21,
      label: 'District',
      isReadOnly: true,
      placeholder: 'District',
      GridProps: { xs: 12, md: 3, sm: 3 },
      fullWidth: true
    },
    {
      render: { componentType: 'textField', group: 1 },
      name: 'state',
      sequence: 22,
      label: 'State',
      isReadOnly: true,
      placeholder: 'State',
      GridProps: { xs: 12, md: 3, sm: 3 },
      fullWidth: true
    },
    {
      render: { componentType: 'textField', group: 1 },
      name: 'country',
      sequence: 23,
      label: 'Country',
      isReadOnly: true,
      placeholder: 'Country',
      GridProps: { xs: 12, md: 3, sm: 3 },
      fullWidth: true
    },
    {
      render: { componentType: 'textField', group: 1 },
      name: 'address',
      sequence: 16.2,
      type: 'text',
      label: 'Address',
      required: false,
      placeholder: 'Address',
      GridProps: { xs: 12, md: 3, sm: 3 },
      fullWidth: true,
      maxLength: 40,
      showMaxLength: true
    },
    {
      render: { componentType: 'textField', group: 1 },
      name: 'firmName',
      sequence: 15.1,
      type: 'text',
      label: 'Firm Name As per records',
      placeholder: 'Firm Name',
      GridProps: { xs: 12, md: 3, sm: 3 },
      fullWidth: true,
      required: true,
      maxLength: 150,
      schemaValidation: {
        type: 'string',
        rules: [{ name: 'required', params: ['This Field is required.'] }]
      }
    }
  ]
};
