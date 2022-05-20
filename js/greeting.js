/****************************/
/****   ������̸� ���� JS   ****/
/****************************/

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input"); //��ǲ �ΰ��ϰ�� ������ input �ϳ��� ���� �� �̺�Ʈ Ʈ���ŷ� ���Һи� 
const greeting = document.querySelector("#greeting");

//string�� �ݺ��� ��� ��Ÿ ������ ���� �빮�� ������ ������
const HIDDEN_CLASSNAME = "hidden"; 
const USERNAME_KEY = "username";

//�� ���� ����� function
function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;

    greeting.innerText = `Hello ${username}`; //����Ʈ�� ��ü �����Է� ���� 
    greeting.classList.remove(HIDDEN_CLASSNAME);

    localStorage.setItem(USERNAME_KEY,username);
}

//�� ������� function
function paintGreetings(username){
  greeting.innerText = `Hello ${username}`; 
  greeting.classList.remove(HIDDEN_CLASSNAME);
  
}

const savedUserName = localStorage.getItem(USERNAME_KEY);//���ý��丮�� ���尪(������̸�) ��������
if(savedUserName === null){
  //���� ���丮�� ���尪(������̸�) ������
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit",onLoginSubmit);
}else{
  //���� ���丮�� ���尪(������̸�) ������
  paintGreetings(savedUserName);
}




