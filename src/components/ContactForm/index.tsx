import {ChangeEvent, MutableRefObject, useEffect, useRef, useState} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import {FormDetails} from '../../config/interfaces/form-details.interface';
import {initialState, MAIL_REGEX} from './index.constants';
import RegularButton from '../Button/Regular';
import {send} from 'emailjs-com';
import Flex from '../Flex';
import Spacing from '../Spacing';
import TextField from '../TextField';
import Text from '../Typography';
import './index.scss';
import {toast} from 'react-toastify';

const {
        REACT_APP_RECAPTCHA_SITE_KEY,
        REACT_APP_EMAILJS_SERVICE_ID,
        REACT_APP_EMAILJS_TEMPLATE_ID
      } = process.env;

export const ContactForm = () => {
  const [formDetails, setFormDetails] = useState<FormDetails>(initialState);
  const [showCaptcha, setShowCaptcha] = useState<boolean>(false);
  const [loading, setLoading]         = useState<boolean>(false);
  const captchaRef                    = useRef() as MutableRefObject<ReCAPTCHA>;

  useEffect(() => {
    if (!REACT_APP_RECAPTCHA_SITE_KEY) {
      toast('ReCaptcha siteKey missing, Please contact admin', {type: 'error'});
    }
  }, [])

  useEffect(() => {
    if (
      !showCaptcha &&
      MAIL_REGEX.test(formDetails.email) &&
      formDetails.message.trim() !== ''
    ) {
      setShowCaptcha(true);
    }
  }, [formDetails, showCaptcha]);

  const onCaptchaChange = (verified: any): void => {
    if (verified) {
      setCaptchaPassed(true);
      return;
    }

    handleCaptchaError();
  };

  const setCaptchaPassed = (captchaPassed: boolean): void => {
    setFormDetails({...formDetails, captchaPassed});
  };

  const handleCaptchaError = (): void => {
    setCaptchaPassed(false);
  };

  const disableSubmitButton = (): boolean =>
    formDetails.message.trim() === '' ||
    !MAIL_REGEX.test(formDetails.email) ||
    (!formDetails.captchaPassed && Boolean(REACT_APP_RECAPTCHA_SITE_KEY)) ||
    loading;

  const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormDetails({...formDetails, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e: any): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    try {
      await send(
        REACT_APP_EMAILJS_SERVICE_ID || '',
        REACT_APP_EMAILJS_TEMPLATE_ID || '',
        formDetails as any
      );
      setFormDetails(initialState);
      setShowCaptcha(false);
      captchaRef.current.reset();
      toast('Message sent!!!', {type: 'success'});
    } catch (_error) {
      toast('An error has occurred! Please try again', {type: 'error'});
    }
    setLoading(false);
  };

  return (
    <Spacing className="contact-form-wrapper" paddingHorizontal="20px">
      <Flex itemsFlex={0.45} itemsFlexMd={1}>
        <form>
          <Text className="title">
            Contact The Team
          </Text>
         
          <TextField
            type="email"
            onChange={onInputChange}
            value={formDetails.email}
            label="Email Address"
            name="email"
          />
         

          <TextField 
            value={formDetails.message}
            onChange={onInputChange}
            label="Message"
            name="message"
          />

          {REACT_APP_RECAPTCHA_SITE_KEY ? <Spacing marginBottom="48px" display={showCaptcha ? 'initial' : 'none'}>
            <ReCAPTCHA
              sitekey={REACT_APP_RECAPTCHA_SITE_KEY ?? ''}
              onChange={onCaptchaChange}
              onErrored={handleCaptchaError}
              onExpired={handleCaptchaError}
              ref={captchaRef}
            />
          </Spacing> : null}

          <RegularButton
            fullWidth
            disabled={disableSubmitButton()}
            onClick={handleSubmit}
          >Submit</RegularButton>
        </form>
      </Flex>
    </Spacing>
  );
};
