import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function LoginForm(props) {
    const {data, inputChange, login} = props;
    
    return (
      <div>
        <form>
          <TextField id="title" label="メールアドレス" variant="standard" name="email" value={data.email} onChange={inputChange} />
          <TextField id="description" label="パスワード" variant="standard" name="password" value={data.password} onChange={inputChange} />
          <Button color="primary" variant="contained"  onClick={login}>ログイン</Button>
        </form>
      </div>
    );
}

export default LoginForm;