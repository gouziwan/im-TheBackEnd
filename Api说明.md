## /判断用户账号是否被注册
```text
账号是否被注册
```
#### 接口状态
> 已完成

#### 接口URL
> http://localhost:3000/user/accres

#### 请求方式
> POST

#### Content-Type
> urlencoded

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
account | 12345 | Text | 是 | 注册的账号
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript

{
	"code": 500,
	"msg": "账号已被注册"
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
account | 12345 | Text | 注册的账号
## /判断用户是否注册邮箱
```text
用注册账号的时候是否这个邮箱被注册了
```
#### 接口状态
> 已完成

#### 接口URL
> http://localhost:3000/user/email

#### 请求方式
> POST

#### Content-Type
> urlencoded

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
email | 1234567@qq.com | Text | 是 | 注册的邮箱
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
// 被注册
{
	"code": 500,
	"msg": "邮箱已被注册"
}
// 没注册
{
	"code": 200,
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
email | 1234567@qq.com | Text | 
## /邮箱注册发送
```text
邮箱注册发送
```
#### 接口状态
> 已完成

#### 接口URL
> http://localhost:3000/user/sendEmaild

#### 请求方式
> POST

#### Content-Type
> urlencoded

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
email | 123456@qq.com | Text | 是 | -
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"code": 500,
	"msg": "发送失败请重试"
}


{
	"code": 200,
	"msg": "发送成功"
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
email | 123456@qq.com | Text | 
## /用户注册
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://localhost:3000/user/register

#### 请求方式
> POST

#### Content-Type
> urlencoded

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
account | 12345 | Text | 是 | 注册的账号
password | 1234567 | Text | 是 | 注册的密码
email | 12345667@qq.com | Text | 是 | 注册的邮箱
code | 123435 | Text | 是 | 注册的时候邮箱发送的验证码
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"code": 500,
	"msg": "账号已被注册"
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
account | 12345 | Text | 注册的账号
password | 1234567 | Text | 注册的密码
email | 12345667@qq.com | Text | 注册的邮箱
code | 123435 | Text | 注册的时候邮箱发送的验证码
## /用户登录接口
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://localhost:3000/user/login

#### 请求方式
> POST

#### Content-Type
> urlencoded

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
account | 12345 | Text | 是 | 注册时候的账号也可以用注册的时候邮箱号
password | 12345678qq | Text | 是 | 账号密码
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"code": 500,
	"msg": "用户不存在"
}

{
	"code": 200,
	"data": {
		"userid": "666730674112886510172951641200774003",
		"name": "今天天气真好哦",
		"account": "12345",
		"sex": "2",
		"birth": "1072886400000",
		"register_tiem": "1641200774003",
		"exp": "春江水暖鸭先知",
		"imgurl": "5a61bb9d4e738875bb6380f68486204c.png"
	},
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NjczMDY3NDExMjg4NjUxMDE3Mjk1MTY0MTIwMDc3NDAwMyIsImlhdCI6MTY0NjMwNDE1OCwiZXhwIjoxNzMyNzA0MTU4fQ.u214XcBUGwI4nZtfC7MKFRMpqKUfFotTvdc0TcMZonI"
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
account | 12345678@qq.com | Text | 注册时候的账号也可以用注册的时候邮箱号
password | 123456 | Text | 账号密码
## /修改用户名的名字
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://localhost:3000/user/changingName

#### 请求方式
> POST

#### Content-Type
> urlencoded

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NjczMDY3NDExMjg4NjUxMDE3Mjk1MTY0MTIwMDc3NDAwMyIsImlhdCI6MTY0NjMwNDE1OCwiZXhwIjoxNzMyNzA0MTU4fQ.u214XcBUGwI4nZtfC7MKFRMpqKUfFotTvdc0TcMZonI | Text | 是 | 账号登录的时候token
name | 今天天气真好i | Text | 是 | 你要修改的名字
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"code": 200,
	"msg": "修改成功"
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NjczMDY3NDExMjg4NjUxMDE3Mjk1MTY0MTIwMDc3NDAwMyIsImlhdCI6MTY0NjMwNDE1OCwiZXhwIjoxNzMyNzA0MTU4fQ.u214XcBUGwI4nZtfC7MKFRMpqKUfFotTvdc0TcMZonI | Text | 账号登录的时候token
name | 今天天气真好i | Text | 
## /用户是否登录
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://localhost:3000/user/userInfo

#### 请求方式
> POST

#### Content-Type
> urlencoded

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9 | Text | 是 | 账号登录的时候token
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"code": 200,
	"data": {
		"userid": "666730674112886510172951641200774003",
		"name": "今天天气真好i",
		"account": "12345",
		"sex": "2",
		"birth": "1072886400000",
		"phone": "15111111111",
		"register_tiem": "1641200774003",
		"exp": "春江水暖鸭先知",
		"imgurl": "5a61bb9d4e738875bb6380f68486204c.png",
		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NjczMDY3NDExMjg4NjUxMDE3Mjk1MTY0MTIwMDc3NDAwMyIsImlhdCI6MTY0NjMwNDczMCwiZXhwIjoxNzMyNzA0NzMwfQ.Sj2rNFv7MpYzJs7HSPFKyst_C88-XnCChQLC-i6K_nY"
	}
}

{
	"code": 500,
	"msg": "token失效"
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NjczMDY3NDExMjg4NjUxMDE3Mjk1MTY0MTIwMDc3NDAwMyIsImlhdCI6MTY0NjMwNDczMCwiZXhwIjoxNzMyNzA0NzMwfQ.Sj2rNFv7MpYzJs7HSPFKyst_C88-XnCChQLC-i6K_nY | Text | 账号登录的时候token
token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9 | Text | 失败的token
## /修改用户的个性签名
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://localhost:3000/user/signature

#### 请求方式
> POST

#### Content-Type
> urlencoded

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NjczMDY3NDExMjg4NjUxMDE3Mjk1MTY0MTIwMDc3NDAwMyIsImlhdCI6MTY0NjMwNDczMCwiZXhwIjoxNzMyNzA0NzMwfQ.Sj2rNFv7MpYzJs7HSPFKyst_C88-XnCChQLC-i6K_nY | Text | 是 | 账号登录的时候token
sig | 长风破浪会有时，直挂云帆济沧海 | Text | 是 | -
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"code": 200,
	"msg": "修改成功"
}
```
## /修改用户的性别
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://localhost:3000/user/upsex

#### 请求方式
> POST

#### Content-Type
> urlencoded

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NjczMDY3NDExMjg4NjUxMDE3Mjk1MTY0MTIwMDc3NDAwMyIsImlhdCI6MTY0NjMwNDczMCwiZXhwIjoxNzMyNzA0NzMwfQ.Sj2rNFv7MpYzJs7HSPFKyst_C88-XnCChQLC-i6K_nY | Text | 是 | 账号登录的时候token
sex | 1 | Text | 是 | 0 保密 1 男 2女
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"code": 200,
	"msg": "修改成功"
}
```
## /修改用户的生日
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://localhost:3000/user/upbirthday

#### 请求方式
> POST

#### Content-Type
> urlencoded

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NjczMDY3NDExMjg4NjUxMDE3Mjk1MTY0MTIwMDc3NDAwMyIsImlhdCI6MTY0NjMwNDczMCwiZXhwIjoxNzMyNzA0NzMwfQ.Sj2rNFv7MpYzJs7HSPFKyst_C88-XnCChQLC-i6K_nY | Text | 是 | 账号登录的时候token
birt | 1646305693 | Text | 是 | 时间戳
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"code": 200,
	"msg": "修改成功"
}
```
## /修改用户的手机号
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://localhost:3000/user/upPhone

#### 请求方式
> POST

#### Content-Type
> urlencoded

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NjczMDY3NDExMjg4NjUxMDE3Mjk1MTY0MTIwMDc3NDAwMyIsImlhdCI6MTY0NjMwNDczMCwiZXhwIjoxNzMyNzA0NzMwfQ.Sj2rNFv7MpYzJs7HSPFKyst_C88-XnCChQLC-i6K_nY | Text | 是 | 账号登录的时候token
phone | 12345678901 | Text | 是 | 手机号
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"code": 500,
	"msg": "手机不正确"
}
```
## /通过id 查找用户信息
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://localhost:3000/user/getUserInfo

#### 请求方式
> POST

#### Content-Type
> urlencoded

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
userid | 520000201912245741 | Text | 是 | 用户id
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"code": 200,
	"data": {
		"userid": "520000201912245741",
		"name": "泪痕",
		"account": "3611655",
		"email": "6p@Fv",
		"sex": "2",
		"birth": "1645088237463",
		"phone": "18383861724",
		"register_tiem": "1645088237463",
		"exp": "也然它话马集周商儿斯听强。",
		"imgurl": "2.png"
	}
}
```
## /退出登录
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://localhost:3000/user/logout

#### 请求方式
> POST

#### Content-Type
> urlencoded

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NjczMDY3NDExMjg4NjUxMDE3Mjk1MTY0MTIwMDc3NDAwMyIsImlhdCI6MTY0NjMwNDczMCwiZXhwIjoxNzMyNzA0NzMwfQ.Sj2rNFv7MpYzJs7HSPFKyst_C88-XnCChQLC-i6K_nY | Text | 是 | 账号登录的时候token
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"code": 200,
	"msg": "退出成功"
}
```
## /修改账号密码时邮箱发送
```text
邮箱注册发送
```
#### 接口状态
> 已完成

#### 接口URL
> http://localhost:3000/user/upSendEmaild

#### 请求方式
> POST

#### Content-Type
> urlencoded

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
email | 1234556qq.com | Text | 是 | 注册时候的邮箱
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"code": 200,
	"msg": "发送成功"
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
email | 123456@qq.com | Text | 
## /账号跟邮箱是否一致
```text
修改账号密码的时候验证账号是不是 跟注册时候的邮箱一致
```
#### 接口状态
> 已完成

#### 接口URL
> http://localhost:3000/user/verifyEmailAccounts

#### 请求方式
> POST

#### Content-Type
> urlencoded

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
account | 12345 | Text | 是 | 注册的时候账号
email | 123456@qq.com | Text | 是 | 注册的时候邮箱
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"code": 200,
	"data": false,
	"msg": "邮箱与绑定的账号不一致"
}
```
## /验证码的是否正确
```text
验证用户在修改密码的时候 验证码是否正确
```
#### 接口状态
> 已完成

#### 接口URL
> http://localhost:3000/user/isCodeCrounted

#### 请求方式
> POST

#### Content-Type
> urlencoded

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
account | 12345 | Text | 是 | 注册的时候账号
email | 123465@qq.com | Text | 是 | 注册的时候邮箱
code | 123456 | Text | 是 | 验证码
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"code": 200,
	"data": false,
	"msg": "验证码不正确"
}
```
## /修改用户的账号密码
```text
修改用户密码
```
#### 接口状态
> 已完成

#### 接口URL
> http://localhost:3000/user/upAccountPasswrold

#### 请求方式
> POST

#### Content-Type
> urlencoded

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
account | 12345 | Text | 是 | 注册的时候账号
email | 123456@qq.com | Text | 是 | 注册的时候邮箱
code | 690186 | Text | 是 | 验证码
password | 123456789qq | Text | 是 | 要修改的密码
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"code": 200,
	"data": true,
	"msg": "修改成功"
}
```
## /修改用户头像文件修改
```text
 上传图片的时候需要把 Content-Type 为 multipart/form-data
```
#### 接口状态
> 已完成

#### 接口URL
> http://localhost:3000/upload/uploadImg

#### 请求方式
> POST

#### Content-Type
> form-data

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU4OTk2NTA5NTE5MTE4NDY3MTQxNjQ1NjY5NjYzNzk4IiwiaWF0IjoxNjQ2MTkwODE4LCJleHAiOjE3MzI1OTA4MTh9.CnFBospsLYafoALGR4oLJqGBDIABt2REd5IZsK2rrqA | Text | 是 | -
fileimg | C:\Users\91645\Desktop\新建文件夹 (2)\QQ图片20211231112248.jpg | File | 是 | -
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"code": 200,
	"msg": "头像修改成功",
	"imgurl": "81633788217c598e8e20ea1e47a5aa73.jpeg"
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
code | 200 | Text | 
msg | 头像修改成功 | Text | 返回文字描述
imgurl | 81633788217c598e8e20ea1e47a5aa73.jpeg | Text | 
## /聊天信息上传的图片
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://localhost:3000/upload/uploadMsgImg

#### 请求方式
> POST

#### Content-Type
> form-data

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
fileimg | 请选择上传文件 | File | 是 | -
friendId |  | Text | 是 | 接收者的用户id
userId |  | Text | 是 | 发送者的用户id
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /聊天信息上传视频
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://localhost:3000/upload/uploadVideoRoute

#### 请求方式
> POST

#### Content-Type
> form-data

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
video | 请选择上传文件 | File | 是 | -
friendId |  | Text | 是 | 接收者的用户id
userId |  | Text | 是 | 发送者的用户id
height |  | Text | 是 | 视频的高度
width |  | Text | 是 | 视频的宽度
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /根据内容搜索用户
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://localhost:3000/search/seacthUser

#### 请求方式
> POST

#### Content-Type
> urlencoded

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
userid | 520000201912245741 | Text | 是 | -
content | 无忧 | Text | 是 | -
list | 10 | Text | 是 | -
offset | 0 | Text | 是 | -
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"code": 200,
	"data": [
		{
			"userid": "130000198511094332",
			"name": "无忧",
			"account": "948495",
			"sex": "2",
			"phone": "15183578557",
			"exp": "走员可以种第低级复又回路求除手世。",
			"imgurl": "5.jpeg",
			"isFriend": 0
		},
		{
			"userid": "210000202004084497",
			"name": "无忧",
			"account": "6284463",
			"sex": "2",
			"phone": "17167251487",
			"exp": "按化部现院花史把家会断领。",
			"imgurl": "4.jpeg",
			"isFriend": 0
		},
		{
			"userid": "220000202112155442",
			"name": "绿水无忧",
			"account": "64381",
			"sex": "2",
			"phone": "14035664555",
			"exp": "即完分代质用根况效选其人料酸起究到。",
			"imgurl": "4.jpeg",
			"isFriend": 0
		},
		{
			"userid": "330000198702095669",
			"name": "无忧",
			"account": "33898",
			"sex": "1",
			"phone": "16546080562",
			"exp": "劳连感达条经展记是商去界。",
			"imgurl": "6.jpeg",
			"isFriend": 0
		},
		{
			"userid": "340000201812036973",
			"name": "无忧",
			"account": "52328",
			"sex": "2",
			"phone": "17744418492",
			"exp": "权京论日马它按日达定总为些时。",
			"imgurl": "1.jpg",
			"isFriend": 0
		},
		{
			"userid": "350000199307033845",
			"name": "无忧",
			"account": "336441",
			"sex": "2",
			"phone": "17260128686",
			"exp": "非养写动报之进加话阶西然一一。",
			"imgurl": "6.jpeg",
			"isFriend": 0
		},
		{
			"userid": "360000197710238616",
			"name": "绿水无忧",
			"account": "789141",
			"sex": "1",
			"phone": "14627280002",
			"exp": "议达由清史际程南开如层越为低约听长。",
			"imgurl": "5.jpeg",
			"isFriend": 0
		},
		{
			"userid": "360000198108055213",
			"name": "绿水无忧",
			"account": "16723",
			"sex": "2",
			"phone": "19521727534",
			"exp": "此任市区却争切石加之酸制八然两律。",
			"imgurl": "8.jpeg",
			"isFriend": 0
		},
		{
			"userid": "370000201712100793",
			"name": "绿水无忧",
			"account": "75723",
			"sex": "1",
			"phone": "16547612128",
			"exp": "效目门教两当带矿具格容酸提。",
			"imgurl": "9.jpeg",
			"isFriend": 0
		},
		{
			"userid": "430000201110136883",
			"name": "绿水无忧",
			"account": "71828",
			"sex": "1",
			"phone": "13422930206",
			"exp": "种民角油表对周见价争及段单整响算近。",
			"imgurl": "5.jpeg",
			"isFriend": 0
		}
	],
	"nextPage": true
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
code | 200 | Text | 成功码
data | - | Text | 返回数据
nextPage | true | Text | 是否有下yi'ye
## /好友申请
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://localhost:3000/friend/addFriend

#### 请求方式
> POST

#### Content-Type
> urlencoded

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
userid | 990000201105263908 | Text | 是 | 用户id 用户id 其实就是你登录的那个id
friendid | 990000198407092695 | Text | 是 | 你要添加的用户id
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{"code":200,"msg":"申请成功"}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
code | 200 | Text | 成功码
msg | 申请成功 | Text | 返回文字描述
## /查找好友申请记录
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://localhost:3000/friend/friendApplihistory

#### 请求方式
> POST

#### Content-Type
> urlencoded

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
userid | 990000201105263908 | Text | 是 | 用户id 用户id 其实就是你登录的那个id
condition | 1 | Text | 否 |  默认 查找全部 0是查找已同意的 1是查找申请中的 2是查找拒绝的
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{"code":200,"data":[{"id":"833093111744408008981646313276591","userid":"990000201105263908","friendid":"990000198407092695","friend_state":"1","create_tiem":"1646313276591","content":"","ready":null,"friendInfo":{"name":"泪痕","userid":"990000198407092695","imgurl":"1.jpg"}}]}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
code | 200 | Text | 成功码
data | - | Text | 返回数据
data.friend_state | 1 | Text | 好友状态 当前是申请中的
## /同意好友的申请
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://localhost:3000/friend/agreeWithFriendRequests

#### 请求方式
> POST

#### Content-Type
> urlencoded

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
friendid | 990000198407092695 | Text | 是 | friendid 就是 你登录的那个账号
userid | 990000201105263908 | Text | 是 | userid 就是你要同意的那个人
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"code": 500,
	"msg": "请勿重复添加好友"
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
code | 500 | Text | 成功码
msg | 请勿重复添加好友 | Text | 已成为好友
## /获取好友新的申请消息
```text
 获取好友最新的提示信息没有读取的 1为已读 0 为未读
```
#### 接口状态
> 已完成

#### 接口URL
> http://localhost:3000/friend/getNewFriendPrompts

#### 请求方式
> POST

#### Content-Type
> urlencoded

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
userid | 990000201105263908 | Text | 是 | 用户id 用户id 其实就是你登录的那个id
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"code": 200,
	"msg": "成功",
	"newMsg": 0
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
code | 200 | Text | 成功码
newMsg | 0 | Text | 没有消息
## /拒绝好友申请
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://localhost:3000/friend/rejectAddFriend

#### 请求方式
> POST

#### Content-Type
> urlencoded

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
id | 5018509771193197808991645933126853 | Text | 是 | -
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"code": 200,
	"msg": "已拒绝"
}
```
## /删除添加好友记录
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://localhost:3000/friend/deleteFriendRecord

#### 请求方式
> POST

#### Content-Type
> urlencoded

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
id | 5018509771193197808991645933126853 | Text | 是 | -
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"code": 200,
	"msg": "删除成功"
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
code | 500 | Text | 成功码
msg | 请勿重复添加好友 | Text | 已成为好友
## /获取添加的好友
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://localhost:3000/friend/getAddFriend

#### 请求方式
> POST

#### Content-Type
> urlencoded

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
userid | 990000201105263908 | Text | 是 | -
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"code": 200,
	"pinyinArr": {
		"l": [
			{
				"userid": "990000198407092695",
				"name": "泪痕",
				"imgurl": "1.jpg",
				"phone": "14708455486",
				"exp": "代图与红年能容光而龙近将群快装影型史。",
				"account": "95051",
				"sex": "2"
			}
		]
	}
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
code | 200 | Text | 成功码
pinyinArr.l | - | Text | 这个是根据 name  第一个字的字母排序  leI  的第一个字母就是 l
## /是否为好友
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://localhost:3000/friend/isFriend

#### 请求方式
> POST

#### Content-Type
> urlencoded

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
friendid | 990000198407092695 | Text | 是 | 你要查找用户的id
userid | 990000201105263908 | Text | 是 | 你自己的id
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{"code":200,"isFriend":true}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
code | 200 | Text | 成功码
isFriend | true | Text | true为好友  false 不是
## /获取用户的聊天信息
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://localhost:3000/msg/allmsg

#### 请求方式
> POST

#### Content-Type
> urlencoded

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
id | 58996509519118467141645669663798 | Text | 是 | -
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"code": 200,
	"data": {
		"666730674112886510172951641200774003": [
			{
				"id": "9710951118467141645670210718",
				"userId": "58996509519118467141645669663798",
				"friendId": "666730674112886510172951641200774003",
				"msg": "你好啊！我叫schemauser11111",
				"types": "1",
				"send_tiem": "1645670210718",
				"static": "0"
			},
			{
				"id": "8550095421191777492413561645687348672",
				"userId": "58996509519118467141645669663798",
				"friendId": "666730674112886510172951641200774003",
				"msg": "测试",
				"types": "1",
				"send_tiem": "1645687348668",
				"static": "0"
			},
			{
				"id": "629095441191777492413561645688164153",
				"userId": "58996509519118467141645669663798",
				"friendId": "666730674112886510172951641200774003",
				"msg": "测试下空空空",
				"types": "1",
				"send_tiem": "1645688164150",
				"static": "0"
			},
			{
				"id": "800396409541180265694581645690774948",
				"userId": "666730674112886510172951641200774003",
				"friendId": "58996509519118467141645669663798",
				"msg": "😂",
				"types": "1",
				"send_tiem": "1645690774940",
				"static": "0"
			},
			{
				"id": "49730955119015061617451645698674650",
				"userId": "666730674112886510172951641200774003",
				"friendId": "58996509519118467141645669663798",
				"msg": "😀",
				"types": "1",
				"send_tiem": "1645698674599",
				"static": "0"
			},
			{
				"id": "843d101a-5855-4e6d-999d-c42f32e5ecd2",
				"userId": "58996509519118467141645669663798",
				"friendId": "666730674112886510172951641200774003",
				"msg": "61bd74f6e01bf71ac9de5258508043d0.jpeg",
				"types": "2",
				"send_tiem": "1646102298194",
				"static": "0"
			},
			{
				"id": "31245099011857680116471646104677509",
				"userId": "58996509519118467141645669663798",
				"friendId": "666730674112886510172951641200774003",
				"msg": "1]",
				"types": "1",
				"send_tiem": "1646104677506",
				"static": "0"
			},
			{
				"id": "56869099011857680116471646104740217",
				"userId": "58996509519118467141645669663798",
				"friendId": "666730674112886510172951641200774003",
				"msg": "21",
				"types": "1",
				"send_tiem": "1646104740214",
				"static": "0"
			},
			{
				"id": "793620991311857680116471646106945922",
				"userId": "58996509519118467141645669663798",
				"friendId": "666730674112886510172951641200774003",
				"msg": "q",
				"types": "1",
				"send_tiem": "1646106945919",
				"static": "0"
			},
			{
				"id": "0518f85b-36c5-4884-ab45-df765388c488",
				"userId": "666730674112886510172951641200774003",
				"friendId": "58996509519118467141645669663798",
				"msg": "55fb381ee3bfd4b3db1bff2e7de37239.gif",
				"types": "2",
				"send_tiem": "1646108632789",
				"static": "0"
			},
			{
				"id": "80730991711857680116471646108676707",
				"userId": "58996509519118467141645669663798",
				"friendId": "666730674112886510172951641200774003",
				"msg": "1",
				"types": "1",
				"send_tiem": "1646108676705",
				"static": "0"
			},
			{
				"id": "207099231186315948771646113669575",
				"userId": "58996509519118467141645669663798",
				"friendId": "666730674112886510172951641200774003",
				"msg": "1",
				"types": "1",
				"send_tiem": "1646113669572",
				"static": "0"
			},
			{
				"id": "58125099231186315948771646113773007",
				"userId": "58996509519118467141645669663798",
				"friendId": "666730674112886510172951641200774003",
				"msg": "1",
				"types": "1",
				"send_tiem": "1646113773004",
				"static": "0"
			},
			{
				"id": "683099231186315948771646113790371",
				"userId": "666730674112886510172951641200774003",
				"friendId": "58996509519118467141645669663798",
				"msg": "1",
				"types": "1",
				"send_tiem": "1646113790369",
				"static": "0"
			},
			{
				"id": "6633099231186315948771646113794667",
				"userId": "666730674112886510172951641200774003",
				"friendId": "58996509519118467141645669663798",
				"msg": "test",
				"types": "1",
				"send_tiem": "1646113794664",
				"static": "0"
			},
			{
				"id": "7299099231186315948771646113807353",
				"userId": "666730674112886510172951641200774003",
				"friendId": "58996509519118467141645669663798",
				"msg": "tet",
				"types": "1",
				"send_tiem": "1646113807350",
				"static": "0"
			},
			{
				"id": "19099251186315948771646114798906",
				"userId": "58996509519118467141645669663798",
				"friendId": "666730674112886510172951641200774003",
				"msg": "1",
				"types": "1",
				"send_tiem": "1646114798903",
				"static": "0"
			},
			{
				"id": "8880099511170075461646190436544",
				"userId": "58996509519118467141645669663798",
				"friendId": "666730674112886510172951641200774003",
				"msg": "1",
				"types": "1",
				"send_tiem": "1646190436536",
				"static": "0"
			},
			{
				"id": "3796099511170075461646190439414",
				"userId": "58996509519118467141645669663798",
				"friendId": "666730674112886510172951641200774003",
				"msg": "test",
				"types": "1",
				"send_tiem": "1646190439410",
				"static": "0"
			}
		]
	},
	"user": [
		{
			"userid": "666730674112886510172951641200774003",
			"name": "今天天气真好i",
			"imgurl": "5a61bb9d4e738875bb6380f68486204c.png"
		}
	]
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
code | 200 | Text | 成功码
data | - | Text | 返回数据
data.666730674112886510172951641200774003 | - | Text | 这个跟用户的聊天数据
data.666730674112886510172951641200774003.userId | 58996509519118467141645669663798 | Text | userid就是 如果你的好友发给你的话 userid就是你的好友的userid 否则 就是你发给你好友 userid 就是你自己
data.666730674112886510172951641200774003.friendId | 666730674112886510172951641200774003 | Text | 这个与之相反
data.666730674112886510172951641200774003.msg | 你好啊！我叫schemauser11111 | Text | 消息
data.666730674112886510172951641200774003.types | 1 | Text | 1为文本 2为图片 3为视频 4为地址
data.666730674112886510172951641200774003.send_tiem | 1645670210718 | Text | 发送时间
data.666730674112886510172951641200774003.static | 0 | Text | 0 为已读 1为未读
## /设置消息为已读
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://localhost:3000/msg/setMsgRead

#### 请求方式
> POST

#### Content-Type
> urlencoded

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
id | [123] | Text | 是 | 必须是数组
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"code": 200,
	"msg": "成功"
}
```
## /获取表情包图片的列表
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://localhost:3000/expression/getExpression

#### 请求方式
> POST

#### Content-Type
> urlencoded

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
userid | 666730674112886510172951641200774003 | Text | 是 | -
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{"code":200,"data":[{"id":"a73bc249-da8d-4325-9194-ad6f95bcead8","name":"039725d1f4a2c88ad75f85418c18e7d5.jpeg","userid":"666730674112886510172951641200774003"},{"id":"1dc9d5be-cd85-4c6f-ab2d-798ded5096ad","name":"efe1a2e0ada2905350cf3dba2b7dee59.gif","userid":"666730674112886510172951641200774003"},{"id":"6d28bc4d-4d63-4eb9-bccf-c78111be2bd4","name":"1501f31675c054010e7c385b103642d0.jpeg","userid":"666730674112886510172951641200774003"}]}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
code | 200 | Text | 成功码
data | - | Text | 返回数据
data.id | a73bc249-da8d-4325-9194-ad6f95bcead8 | Text | 
data.name | 039725d1f4a2c88ad75f85418c18e7d5.jpeg | Text | 图片的名字
data.userid | 666730674112886510172951641200774003 | Text | 
## /上传表情包
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://localhost:3000/expression/uploadExpression

#### 请求方式
> POST

#### Content-Type
> form-data

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
userid |  | Text | 是 | 用户id
expression | 请选择上传文件 | File | 是 | -
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"code": 200,
	"msg": "成功"
}
```
## /移除表情包
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://localhost:3000/expression/deleteExpression

#### 请求方式
> POST

#### Content-Type
> urlencoded

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
arr |  | Text | 是 | 数组
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```