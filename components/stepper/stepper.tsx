import { useNavigation } from '@react-navigation/native';
import { Icon } from '@ui-kitten/components';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import { colorsConst, typographyConst } from 'consts';

import { Button } from '../button';
import { Text, View } from '../themed';

interface StepperPages {
  label: string;
  component: React.ReactNode;
}

interface CreationStep {
  label: string;
  isActive: boolean;
  stepNumber: number;
  isCompletedStep: boolean;
}

const Step = ({
  label,
  isActive = false,
  stepNumber,
  isCompletedStep,
}: CreationStep) => {
  const isFirstStep = stepNumber !== 1;

  return (
    <>
      {isFirstStep && (
        <View
          style={[
            styles.stepLine,
            (isCompletedStep || isActive) && styles.activeStepLine,
          ]}
        />
      )}
      <View style={styles.stepContainer}>
        <View style={{ opacity: isCompletedStep ? 1 : 0.3 }}>
          {isCompletedStep && !isActive && (
            <View style={styles.iconWrapper}>
              <Icon
                name="checkmark-circle-2"
                style={styles.completeIcon}
                fill={colorsConst.roles.primary}
              />
            </View>
          )}

          <Text
            style={[
              styles.stepNumber,
              isActive && styles.activeStepNumber,
              isCompletedStep && !isActive && styles.completedStep,
            ]}>
            {stepNumber}
          </Text>
        </View>
        <Text
          style={[
            styles.stepLabel,
            (isCompletedStep || isActive) && styles.activeLabel,
          ]}>
          {label}
        </Text>
      </View>
    </>
  );
};

export const Stepper = ({
  stepPages,
  finishButtonText,
  inFinish,
}: {
  stepPages: StepperPages[];
  finishButtonText: string;
  inFinish: () => void;
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const { goBack } = useNavigation();
  const isLastStep = stepPages.length - 1 === activeStep;
  const isNextStep = stepPages.length - 1 !== activeStep;
  const isPrevStep = activeStep !== 0;
  const isFirstStep = isNextStep && !isPrevStep;

  const isCompletedStep = (
    completedSteps: number[],
    stepIndex: number,
  ): boolean => {
    return completedSteps.some((step) => step === stepIndex);
  };

  const pushData = (step: number) => {
    setCompletedSteps((prevSteps) => [...prevSteps, step]);
  };

  const removeData = () => {
    setCompletedSteps((steps) => steps.slice(0, -1));
  };

  useEffect(() => {
    if (completedSteps[completedSteps.length - 1] > activeStep) {
      removeData();
    } else {
      pushData(activeStep);
    }
  }, [activeStep]);

  return (
    <View>
      <View style={styles.container}>
        {stepPages.map(({ label }, i) => (
          <Step
            label={label}
            key={`${i + 1}`}
            stepNumber={i + 1}
            isActive={activeStep === i}
            isCompletedStep={isCompletedStep(completedSteps, i)}
          />
        ))}
      </View>

      <View>{stepPages[activeStep].component}</View>

      <View>
        {isFirstStep && (
          <Button type="secondary" onPress={() => goBack()}>
            Відмінити
          </Button>
        )}
        {isPrevStep && (
          <Button
            type="secondary"
            onPress={() => setActiveStep((step) => step - 1)}>
            Повернутись
          </Button>
        )}
        {isNextStep && (
          <Button onPress={() => setActiveStep((step) => step + 1)}>
            Продовжити
          </Button>
        )}
        {isLastStep && <Button onPress={inFinish}>{finishButtonText}</Button>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 570,
  },
  stepContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: typographyConst.spacing.xs,
  },
  stepLine: {
    flex: 1,
    height: 2,
    opacity: 0.4,
    marginHorizontal: 10,
    backgroundColor: colorsConst.foreground.secondary,
  },
  activeStepLine: {
    opacity: 1,
    backgroundColor: colorsConst.roles.primary,
  },
  stepNumber: {
    width: 25,
    height: 25,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: colorsConst.text.contrast,
    backgroundColor: colorsConst.foreground.secondary,
  },
  stepLabel: {
    fontWeight: '500',
    color: colorsConst.text.tertiary,
    fontSize: typographyConst.font.m,
  },

  activeLabel: {
    color: colorsConst.text.primary,
  },
  activeStepNumber: {
    width: 30,
    height: 30,
    backgroundColor: colorsConst.roles.primary,
  },
  completedStep: {
    borderWidth: 2,
    color: colorsConst.roles.primary,
    borderColor: colorsConst.roles.primary,
    backgroundColor: colorsConst.background.main,
  },
  iconWrapper: {
    top: -8,
    right: -5,
    zIndex: 1,
    width: 17,
    height: 17,
    borderWidth: 1,
    borderRadius: 50,
    position: 'absolute',
    backgroundColor: colorsConst.text.contrast,
    borderColor: colorsConst.text.contrast,
  },
  completeIcon: {
    borderWidth: 1,
    borderColor: colorsConst.text.contrast,
  },
});
