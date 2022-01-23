import { getUserSettingsAPI, updateUserSettings } from '../../../db/API/settings';
import { useEffect, useState } from 'react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { ISettings } from '../../../types/api';
import { IInputsPreferences } from '../../../types/formTypes';

const usePreferencesForm = () => {
  const [defaultValues, setDefaultValues] = useState<ISettings | null>(null);

  const methods = useForm();
  const { control, handleSubmit, watch, reset } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'notifications',
  });
  const watchSummary = watch('isSummary');
  const watchBreak = watch('isBreak');

  const getUserSettings = async () => {
    const resp = await getUserSettingsAPI();
    if (resp) setDefaultValues(resp.data);
  };

  useEffect(() => {
    getUserSettings();
  }, []);

  useEffect(() => {
    if (defaultValues) reset(defaultValues);
  }, [defaultValues]);

  const onSubmit: SubmitHandler<IInputsPreferences> = data => {
    console.log(data);
    if (defaultValues?.id) updateUserSettings(defaultValues.id, data);
  };

  return {
    onSubmit,
    defaultValues,
    watchSummary,
    watchBreak,
    handleSubmit,
    fields,
    append,
    remove,
    methods,
  };
};

export default usePreferencesForm;
