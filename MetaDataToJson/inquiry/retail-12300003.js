export const retail_12300003 = {
  form: {
    name: '12300003',
    label: 'LRD - Lease Rental Discounting',
    validationRun: 'onBlur',
    render: {
      renderType: 'stepper',
      groups: {
        '0': 'Personal Details',
        '1': 'Contact Details'
      },
      ordering: 'sequence'
    }
  },
  fields: [
    {
      render: {
        componentType: 'select',
        group: 0
      },
      sequence: 1,
      name: 'source',
      label: 'Source',
      placeholder: 'Source',
      defaultValue: '1',
      required: true,
      validate: 'getValidateValue',
      __VIEW__: { options: 'getAllSourcelist', isReadOnly: true },
      __EDIT__: { options: 'getAllSourcelist', isReadOnly: true },
      __NEW__: { options: 'getInquirySourceByUserId' },
      disableCaching: true,
      fullWidth: true,
      GridProps: {
        xs: 12,
        md: 3,
        sm: 3
      }
    },
    {
      render: {
        componentType: 'select',
        group: 0
      },
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
      disableCaching: 'true',
      fullWidth: true,
      GridProps: {
        xs: 12,
        md: 3,
        sm: 3
      }
    },
    {
      render: {
        componentType: 'textField',
        group: 0
      },
      sequence: 3,
      name: 'otherDescription',
      label: 'Reference',
      placeholder: 'Reference',
      defaultValue: '',
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
      GridProps: {
        xs: 12,
        md: 3,
        sm: 3
      }
    },
    {
      render: {
        componentType: 'autocomplete',
        group: 0
      },
      sequence: 4,
      name: 'employeeUserName',
      label: 'Select Employee',
      placeholder: 'Select Employe',
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
      disableCaching: true,
      fullWidth: true,
      GridProps: {
        xs: 12,
        md: 3,
        sm: 3
      }
    },
    {
      render: {
        componentType: 'autocomplete',
        group: 0
      },
      sequence: 5,
      name: 'partnerUserName',
      label: 'Select IDC',
      placeholder: 'Select IDC',
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
      disableCaching: true,
      fullWidth: true,
      GridProps: {
        xs: 12,
        md: 3,
        sm: 3
      }
    },
    {
      render: {
        componentType: 'select',
        group: 0
      },
      sequence: 6,
      name: 'productType',
      label: 'Product Type',
      placeholder: 'Product Type',
      required: true,
      validate: 'getValidateValue',
      defaultValue: '00',
      options: 'getProductType',
      __VIEW__: { isReadOnly: false },
      __EDIT__: { isReadOnly: true },
      __NEW__: { isReadOnly: false },
      fullWidth: true,
      GridProps: {
        xs: 12,
        md: 3,
        sm: 3
      }
    },
    {
      render: {
        componentType: 'currencyWithLeadingZeros',
        group: 0
      },
      sequence: 7,
      type: 'text',
      name: 'loanAmount',
      label: 'Your Desired Loan Amount',
      placeholder: 'Your Desired Loan Amount',
      required: true,
      schemaValidation: {
        type: 'string',
        rules: [{ name: 'required', params: ['This Field is required.'] }]
      },
      // validationRun: "onChange",
      // validate: "validateLoanAmount",
      fullWidth: true,
      GridProps: {
        xs: 12,
        md: 3,
        sm: 3
      }
    },
    {
      render: {
        componentType: 'select',
        group: 0
      },
      sequence: 8,
      name: 'salutation',
      label: 'Salutation',
      placeholder: 'Salutation',
      required: true,
      validate: 'getValidateValue',
      defaultValue: '00',
      options: 'getSalutation',
      postValidationSetCrossFieldValues: 'getGenderValue',
      fullWidth: true,
      GridProps: {
        xs: 12,
        md: 3,
        sm: 3
      }
    },
    {
      render: {
        componentType: 'individualPancardOptional',
        group: 0
      },
      sequence: 9,
      type: 'text',
      name: 'panNumber',
      label: 'Individual PAN No.',
      placeholder: 'Individual PAN No.',
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
      sequence: 10,
      type: 'text',
      name: 'flag',
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
      sequence: 11,
      type: 'text',
      name: 'message',
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
      sequence: 12,
      type: 'text',
      name: 'id',
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
      sequence: 13,
      type: 'text',
      name: 'name',
      label: 'Name',
      placeholder: 'Name',
      fullWidth: true,
      GridProps: {
        xs: 12,
        md: 3,
        sm: 3
      }
    },
    {
      render: {
        componentType: 'textField',
        group: 0
      },
      sequence: 14,
      type: 'text',
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
      dependentFields: ['flag', 'message'],
      schemaValidation: {
        type: 'string',
        rules: [{ name: 'required', params: ['This Field is required.'] }]
      },
      isReadOnly: (_, dependentFields) => {
        if (dependentFields?.flag?.value === 'S') {
          return true;
        }
        return false;
      },
      maxLength: 50,
      fullWidth: true,
      GridProps: {
        xs: 12,
        md: 3,
        sm: 3
      }
    },
    {
      render: {
        componentType: 'textField',
        group: 0
      },
      sequence: 15,
      type: 'text',
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
      GridProps: {
        xs: 12,
        md: 3,
        sm: 3
      }
    },
    {
      render: {
        componentType: 'textField',
        group: 0
      },
      sequence: 16,
      type: 'text',
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
      GridProps: {
        xs: 12,
        md: 3,
        sm: 3
      }
    },
    {
      render: {
        componentType: 'select',
        group: 0
      },
      sequence: 17,
      name: 'gender',
      label: 'Gender',
      placeholder: 'Gender',
      required: true,
      validate: 'getValidateValue',
      dependentFields: ['flag'],
      defaultValue: '00',
      options: 'getGenderList',
      fullWidth: true,
      GridProps: {
        xs: 12,
        md: 3,
        sm: 3
      }
    },
    {
      render: {
        componentType: 'dob',
        group: 0
      },
      sequence: 18,
      name: 'dob',
      label: 'Date Of Birth',
      placeholder: 'dd/mm/yyyy',
      format: 'dd/MM/yyyy',
      dependentFields: ['flag'],
      validationRun: 'all',
      fullWidth: true,
      GridProps: {
        xs: 12,
        md: 3,
        sm: 3
      }
    },
    {
      render: {
        componentType: 'select',
        group: 0
      },
      sequence: 19,
      name: 'maritalStatus',
      label: 'Marital Status',
      placeholder: 'Marital Status',
      required: true,
      validate: 'getValidateValue',
      defaultValue: '00',
      options: 'getMaritalStatus',
      fullWidth: true,
      GridProps: {
        xs: 12,
        md: 3,
        sm: 3
      }
    },
    {
      render: {
        componentType: 'typography',
        group: 0
      },
      name: 'note1',
      sequence: 20,
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
      GridProps: {
        xs: 12,
        md: 12,
        sm: 12
      }
    },
    {
      render: {
        componentType: 'phoneNumber',
        group: 1
      },
      sequence: 1,
      type: 'text',
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
      GridProps: {
        xs: 12,
        md: 3,
        sm: 3
      }
    },
    {
      render: {
        componentType: 'email',
        group: 1
      },
      sequence: 2,
      name: 'email',
      label: 'Email',
      placeholder: 'Email',
      maxLength: 100,
      fullWidth: true,
      GridProps: {
        xs: 12,
        md: 3,
        sm: 3
      }
    },
    {
      render: {
        componentType: 'textField',
        group: 1
      },
      sequence: 3,
      type: 'text',
      name: 'address',
      label: 'Address',
      placeholder: 'Address',
      maxLength: 40,
      showMaxLength: true,
      fullWidth: true,
      GridProps: {
        xs: 12,
        md: 3,
        sm: 3
      }
    },
    {
      render: {
        componentType: 'textField',
        group: 1
      },
      sequence: 4,
      type: 'text',
      name: 'landmark',
      label: 'Landmark',
      placeholder: 'Landmark',
      maxLength: 100,
      fullWidth: true,
      GridProps: {
        xs: 12,
        md: 3,
        sm: 3
      }
    },
    {
      render: {
        componentType: 'pincode',
        group: 1
      },
      sequence: 5,
      name: 'pincode',
      label: 'Residence Pincode',
      placeholder: 'Residence Pincode',
      required: true,
      validate: 'getValidateValuePincode',
      // validationRun: "onChange",
      postValidationSetCrossFieldValues: 'postValidationSetPincodeDtl',
      runPostValidationHookAlways: true,
      __VIEW__: { isReadOnly: false },
      __EDIT__: { isReadOnly: true },
      __NEW__: { isReadOnly: false },
      fullWidth: true,
      GridProps: {
        xs: 12,
        md: 3,
        sm: 3
      }
    },
    {
      render: {
        componentType: 'select',
        group: 1
      },
      sequence: 6,
      name: 'location',
      label: 'Location',
      placeholder: 'Location',
      required: true,
      validate: 'getValidateValue',
      defaultValue: '00',
      options: 'getPincode',
      dependentFields: ['pincode'],
      postValidationSetCrossFieldValues: 'postValidationSetLocationDtl',
      disableCaching: true,
      fullWidth: true,
      GridProps: {
        xs: 12,
        md: 3,
        sm: 3
      }
    },
    {
      render: {
        componentType: 'textField',
        group: 1
      },
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
      GridProps: {
        xs: 12,
        md: 3,
        sm: 3
      }
    },
    {
      render: {
        componentType: 'textField',
        group: 1
      },
      sequence: 8,
      name: 'district',
      label: 'District',
      placeholder: 'District',
      isReadOnly: true,
      fullWidth: true,
      GridProps: {
        xs: 12,
        md: 3,
        sm: 3
      }
    },
    {
      render: {
        componentType: 'textField',
        group: 1
      },
      sequence: 9,
      name: 'state',
      label: 'State',
      placeholder: 'State',
      isReadOnly: true,
      fullWidth: true,
      GridProps: {
        xs: 12,
        md: 3,
        sm: 3
      }
    },
    {
      render: {
        componentType: 'textField',
        group: 1
      },
      sequence: 10,
      name: 'country',
      label: 'Country',
      placeholder: 'Country',
      isReadOnly: true,
      fullWidth: true,
      GridProps: {
        xs: 12,
        md: 3,
        sm: 3
      }
    },
    {
      render: {
        componentType: 'select',
        group: 1
      },
      sequence: 11,
      name: 'employementStatus',
      label: 'How Are You Currently Employed',
      placeholder: 'How Are You Currently Employed',
      required: true,
      validate: 'getValidateValue',
      defaultValue: '00',
      options: 'getRetailEmployee',
      fullWidth: true,
      GridProps: {
        xs: 12,
        md: 3,
        sm: 3
      }
    },
    {
      render: {
        componentType: 'textField',
        group: 1
      },
      sequence: 12,
      type: 'text',
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
      dependentFields: ['employementStatus'],
      shouldExclude: (_, dependentFields) => {
        if (dependentFields?.employementStatus?.value === '02') {
          return true;
        }
        return false;
      },
      GridProps: {
        xs: 12,
        md: 3,
        sm: 3
      }
    },
    {
      render: {
        componentType: 'typography',
        group: 1
      },
      sequence: 13,
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
      GridProps: {
        xs: 12,
        md: 12,
        sm: 12
      }
    }
  ]
};
