import { Formik, Form } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

import Portal from '../Portal';
import exit from '../../assets/icons/exit.svg';

import { validationSchema } from './validationSchema';
import Input from './Input';
import styles from './form.module.scss';

interface FormContactProps {
  closeModal: () => void;
}

const FormContact = ({ closeModal }: FormContactProps) => {
  return (
    <>
      <Portal target="form-portal">
        <div className={styles.portal}>
          <div className={styles.container}>
            <div className={styles.boxTitle}>
              <h3 className={styles.title}>Contact form.</h3>
              <button onClick={closeModal}>
                <img alt="exit" src={exit} />
              </button>
            </div>
            <Formik
              initialValues={{
                name: '',
                email: '',
                subject: '',
                message: '',
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                toast.promise(
                  emailjs.send(
                    import.meta.env.VITE_SERVICE_ID,
                    import.meta.env.VITE_TEMPLATE_ID,
                    values,
                    import.meta.env.VITE_PUBLIC_KEY,
                  ),
                  {
                    loading: 'Sending message...',
                    success: <b>Message was sent!</b>,
                    error: <b>Message couldn&apos;t be sent. Please try again.</b>,
                  },
                );
              }}
            >
              {() => (
                <Form className={styles.form}>
                  <Input label="Name" name="name" placeholder="Name" />
                  <Input label="Email" name="email" placeholder="Email" />
                  <Input label="Subject" name="subject" placeholder="Subject" />
                  <Input
                    label="Message"
                    name="message"
                    placeholder="Write a message..."
                    rows={6}
                    type="textarea"
                  />

                  <button className={styles.button} type="submit">
                    Send Message
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Portal>
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
};

export default FormContact;
