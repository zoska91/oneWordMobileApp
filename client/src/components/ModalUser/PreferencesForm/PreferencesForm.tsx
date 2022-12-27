import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { FormProvider } from 'react-hook-form';
import { AntDesign } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import useGenerateOptionsFields from '../../../common/useGenereteOptionsFields';
import SelectField from '../../atoms/Inputs/SelectInput';
import Button from '../../atoms/Button';
import InputField from '../../atoms/Inputs/InputField';
import usePreferencesForm from './PreferencesForm.hook';
import TextWrapper from '../../atoms/Text';
import CheckboxField from '../../atoms/Inputs/CheckboxField';
import { TitleText } from '../../atoms/Title';

import * as S from './PreferencesForm.css';
import { View } from 'react-native';

interface PreferencesFormProps {}

const PreferencesForm: FC<PreferencesFormProps> = () => {
  const { t } = useTranslation();

  const { selectLanguageOptions, daysOptions, learnTypesOptions } = useGenerateOptionsFields();

  const { onSubmit, watchSummary, watchBreak, handleSubmit, fields, append, methods, remove } =
    usePreferencesForm();

  return (
    <KeyboardAwareScrollView>
      <FormProvider {...methods}>
        <View style={{ paddingBottom: 100 }}>
          <S.Wrapper>
            <TitleText> {t('form.preferencesTitle')}</TitleText>
            <SelectField name='selectLanguage' options={selectLanguageOptions} required desc />

            <CheckboxField name='isSummary' desc />
            {watchSummary && <SelectField name='summaryDay' options={daysOptions} required />}

            <CheckboxField name='isBreak' desc />
            {watchBreak && <SelectField name='breakDay' options={daysOptions} required />}

            <S.Separator />

            <S.FormLabel>
              <S.SmallTitle style={{ fontFamily: 'JosefinSans_700Bold' }}>
                {t('form.addDailyNotification')}{' '}
              </S.SmallTitle>
              <AntDesign
                name='pluscircle'
                size={24}
                color='#2e2757'
                onPress={() => append({ type: 1, time: '00:00' })}
              />
            </S.FormLabel>

            <S.Desc>{t('form.itIsTheClue')}</S.Desc>

            {fields.map((item, index) => (
              <>
                <S.FormLabel>
                  <TextWrapper>{index + 1}. notification</TextWrapper>
                  <AntDesign
                    name='minuscircle'
                    size={24}
                    color='#2e2757'
                    onPress={() => remove(index)}
                  />
                </S.FormLabel>
                <SelectField
                  name={`notifications.${index}.type`}
                  options={learnTypesOptions}
                  required
                  noLabel
                  placeholderText={t('form.notificationSelectPlaceholder')}
                />
                <InputField name={`notifications.${index}.time`} required type='time' noLabel />
              </>
            ))}
            {/* problem with scrolling on iOS */}
            <S.Placeholder />
          </S.Wrapper>
          <View style={{ marginBottom: 40 }}>
            {/* @ts-ignore */}
            <Button secondaryColor onPress={handleSubmit(onSubmit)}>
              {t('buttons.submit')}
            </Button>
          </View>
        </View>
      </FormProvider>
    </KeyboardAwareScrollView>
  );
};

export default PreferencesForm;
