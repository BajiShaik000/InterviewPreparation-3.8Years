import { useState, useRef, useEffect } from "react";

const CheckoutStepper = ({ config }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);
  const stepRef = useRef([]);
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });

  useEffect(() => {
    setMargins({
      marginLeft: stepRef.current[0].offsetWidth / 2,
      marginRight: stepRef.current[config.length - 1].offsetWidth / 2,
    });
  }, [config.length, stepRef]);

  const StepperComponent = config[currentStep - 1]?.Component;

  const handleNext = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === config.length) {
        setIsCompleted(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };

  const calculateProgressBarWidth = () => {
    return ((currentStep - 1) / (config.length - 1)) * 100;
  };

  if (!config.length) return <></>;

  return (
    <>
      <div className="stepper">
        {config.map((step, index) => {
          return (
            <div
              ref={(el) => (stepRef.current[index] = el)}
              key={step.name}
              className={`step ${
                currentStep > index + 1 || isCompleted ? "complete" : ""
              } ${currentStep === index + 1 ? "active" : ""}`}
            >
              <div className="step-number">
                {currentStep > index + 1 || isCompleted ? (
                  <span>&#10003;</span>
                ) : (
                  index + 1
                )}
              </div>
              <div className="step-name">{step.name}</div>
            </div>
          );
        })}
        <div
          className="progress-bar"
          style={{
            width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
            marginLeft: margins.marginLeft,
            marginRight: margins.marginRight,
          }}
        >
          <div
            className="progress"
            style={{ width: `${calculateProgressBarWidth()}%` }}
          ></div>
        </div>
      </div>

      <StepperComponent />
      {!isCompleted && (
        <button className="btn" onClick={handleNext}>
          {currentStep === config.length ? "Finish" : "Next"}
        </button>
      )}
    </>
  );
};

export default CheckoutStepper;
