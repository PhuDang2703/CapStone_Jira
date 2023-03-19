import React from 'react'
import { Button, Input } from 'antd';
import { UserOutlined, LockOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import { signinJirabugAction } from '../../../store/Actions/JiraBugsActions'
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';


function LoginJiraBugs(props) {
  const navigate = useNavigate();

  //Đây là props đc sinh ra từ withFormik do nó bọc lại function này (ứng dụng của HOC)
  const {
    errors,
    handleChange,
    handleSubmit,
  } = props;

  return (
    <form onSubmit={handleSubmit} className="container mx-auto px-40 " style={{ height: window.innerHeight }} >
      <div className="pt-44" style={{ height: window.innerHeight }} >
        <img className='mb-2' style={{ width: 240, marginLeft: 90 }} src='https://wac-cdn.atlassian.com/dam/jcr:ab384028-e8a3-4dd1-8b45-6d564ef7936a/Jira%20Software_24.svg?cdnVersion=861' alt='jira' />
        <div className="d-flex mt-3" >
          <Input onChange={handleChange} style={{ width: '100%', minWidth: 300 }} name="email" size="large" placeholder="email" prefix={<UserOutlined />} />
        </div>
        <div className="text-red-500">{errors.email}</div>
        <div className="d-flex mt-3">
          <Input onChange={handleChange} style={{ width: '100%', minWidth: 300 }} type="password" name="password" size="large" placeholder="password" prefix={<LockOutlined />} />
        </div>
        <div className="text-red-500">{errors.password}</div>
        <div className='flex justify-center'>
          <Button htmlType="submit" size="large" style={{ minWidth: 420, color: '#fff' }} className="mt-3 bg-sky-600">LOG IN</Button>
        </div>


        <div className="social text-center">

          <div>
            <div className="mb-4 flex items-center justify-between mt-2">
              <a href="#!" className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">Remember me</a>
              <a href="#!" className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">Forgot password?</a>
            </div>
            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                OR
              </p>
            </div>
            <a className="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pt-3 pb-2.5 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]" style={{ backgroundColor: '#3b5998' }} href="#!" role="button" data-te-ripple-init data-te-ripple-color="light">
              {/* Facebook */}
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
              Continue with Facebook
            </a>
            <a className="mb-3 flex w-full items-center justify-center rounded bg-info px-7 pt-3 pb-2.5 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]" style={{ backgroundColor: '#55acee' }} href="#!" role="button" data-te-ripple-init data-te-ripple-color="light">
              {/* Twitter */}
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
              Continue with Twitter
            </a>
          </div>

        </div>
      </div>
    </form>
  )
}

//Search withFormik cua Formik
const LoginJiraBugsWithFormik = withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: ''
  }),
  //Search yup validation
  validationSchema: Yup.object().shape({
    email: Yup.string().required('Email is required!').email('email is invalid!'),
    password: Yup.string().min(6, 'password must have min 6 characters').max(32, 'password  have max 32 characters')

  }),
  handleSubmit: ({ email, password }, { props, setSubmitting, navigate }) => {

    // let action = {
    //     type:USER_SIGNIN_API,
    //     userLogin: {
    //         email:values.email,
    //         password:values.password
    //     }
    // }
    setSubmitting(true);
    props.dispatch(signinJirabugAction(email, password, navigate));

    console.log(props)
    // console.log(values);

  },
  displayName: 'LoginCyberBugs',
})(LoginJiraBugs);



export default connect()(LoginJiraBugsWithFormik);