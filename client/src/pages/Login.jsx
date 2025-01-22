// qkpw0ImCKX9xNMCy
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  useUserLogInMutation,
  useUserRegisterMutation,
} from '@/features/apis/authApi';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';

const Login = () => {
  const [Logininput, setLogininput] = useState({ email: '', password: '' });
  const [SignUpinput, setSignUpinput] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [
    userRegister,
    {
      error: registererror,
      data: registerdata,
      isLoading: registerisLoading,
      isSuccess: registerisSuccess,
    },
  ] = useUserRegisterMutation();
  const [
    userLogIn,
    {
      error: LogInerror,
      data: LogIndata,
      isLoading: LogInisLoading,
      isSuccess: LogInisSuccess,
    },
  ] = useUserLogInMutation();
  const FormInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === 'SignUp') {
      setSignUpinput({ ...SignUpinput, [name]: value });
    } else {
      setLogininput({ ...Logininput, [name]: value });
    }
  };

  const FormSubmitHandler = async (type) => {
    const inputData = type === 'SignUp' ? SignUpinput : Logininput;
    const action = type === 'SignUp' ? userRegister : userLogIn;
    await action(inputData)
  };
 
  useEffect(()=>{
        if(registerisSuccess && registerdata){
          toast.success(registerdata.message || 'Register Successfully')
        }
        if(registererror){
          toast.error(registererror?.data?.message || 'Registeration Failed')
        }
        if(LogInisSuccess && LogIndata){
          toast.success(LogIndata.message || 'Login Successfully')
        }
        if(LogInerror){
          toast.error(LogInerror?.data?.message || 'Login Failed')
        }
  }, [
    registerisLoading,
    LogInisLoading,
    registerdata,
    LogIndata,
    registererror,
    LogInerror
  ])
  return (
    <div className='flex justify-center items-center pt-20'>
      <Tabs defaultValue='account' className='w-[400px]'>
        <TabsList className='grid w-full grid-cols-2'>
          <TabsTrigger value='signUp'>SignUp</TabsTrigger>
          <TabsTrigger value='login'>Login</TabsTrigger>
        </TabsList>
        <TabsContent value='signUp'>
          <Card>
            <CardHeader>
              <CardTitle>SignUp</CardTitle>
              <CardDescription>
                Create a new account and click signup when you're done
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-2'>
              <div className='space-y-1'>
                <Label htmlFor='name'>Name</Label>
                <Input
                  type='text'
                  name='name'
                  value={SignUpinput.name}
                  placeholder='Enter your name'
                  onChange={(e) => FormInputHandler(e, 'SignUp')}
                  require='true'
                />
              </div>
              <div className='space-y-1'>
                <Label htmlFor='Email'>Email</Label>
                <Input
                  type='email'
                  name='email'
                  value={SignUpinput.email}
                  onChange={(e) => FormInputHandler(e, 'SignUp')}
                  require='true'
                  placeholder='Enter your Email'
                />
              </div>
              <div className='space-y-1'>
                <Label htmlFor='Password'>Password</Label>
                <Input
                  type='password'
                  name='password'
                  value={SignUpinput.password}
                  onChange={(e) => FormInputHandler(e, 'SignUp')}
                  require='true'
                  placeholder='Enter Password'
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button disabled={registerisLoading} onClick={() => FormSubmitHandler('SignUp')}>
                {registerisLoading ? (
                  <>
                    <Loader2 className='mr-2 w-4 h-4 animate-spin'>
                      Please wait
                    </Loader2>
                  </>
                ) : (
                  'SignUp'
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value='login'>
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Login your password here. After signup, you'll be logged in.
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-2'>
              <div className='space-y-1'>
                <Label htmlFor='current'>Email</Label>
                <Input
                  type='email'
                  name='email'
                  value={Logininput.email}
                  onChange={(e) => FormInputHandler(e, 'Login')}
                  require='true'
                  placeholder='Enter your Email'
                />
              </div>
              <div className='space-y-1'>
                <Label htmlFor='Password'>Password</Label>
                <Input
                  type='password'
                  name='password'
                  value={Logininput.password}
                  onChange={(e) => FormInputHandler(e, 'Login')}
                  require='true'
                  placeholder='Enter Password'
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button disabled = {LogInisLoading} onClick={() => FormSubmitHandler('Login')}>
                {
                  LogInisLoading ? (
                    <>
                       <Loader2 className='mr-2 w-4 h-4 animate-spin'> Please wait</Loader2>
                    </>
                  ) : 'Login'
                }
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;
