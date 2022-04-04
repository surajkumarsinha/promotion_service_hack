// // URL Utilities

// const getAcsAccessKey = () => {
//   return process.env["COMMUNICATION_SERVICES_ACCESSKEY"];
// };

// const getAcsEndPointUrl = () => {
//   return process.env["COMMUNICATION_SERVICES_ENDPOINT"];
// };

// const createIdentityUrl = ()=>{
//   const endPointUrl = getAcsEndPointUrl();
//   return `${endPointUrl}/identities?api-version=2021-03-07`;
// };

// const refreshTokenUrl = (acs_id)=>{
//   const endPointUrl = getAcsEndPointUrl();
//   return `${endPointUrl}/identities/${acs_id}/:issueAccessToken?api-version=2021-03-07`;
// };

// const deleteIdentityUrl = (acs_id)=>{
//   const endPointUrl = getAcsEndPointUrl();
//   return `${endPointUrl}/identities/${acs_id}/:issueAccessToken?api-version=2021-03-07`;
// };

// const createChatThreadUrl = ()=>{
//   const endPointUrl = getAcsEndPointUrl();
//   return `${endPointUrl}/chat/threads?api-version=2021-09-07`;
// };

// const getChatThreadUrl = ()=>{
//   const endPointUrl = getAcsEndPointUrl();
//   return `${endPointUrl}/chat/threads?api-version=2021-09-07`;
// };

// const getChatThreadParticipantUrl = (threadId)=>{
//   const endPointUrl = getAcsEndPointUrl();
//   return `${endPointUrl}/chat/threads/${threadId}/participants?api-version=2021-09-07`;
// };

// const addChatThreadParticipantUrl = (threadId)=>{
//   const endPointUrl = getAcsEndPointUrl();
//   return `${endPointUrl}/chat/threads/${threadId}/participants/:add?api-version=2021-09-07`;
// };

// const getChatMessageUrl = (threadId, maxPageSize, startTime) => {
//   const endPointUrl = getAcsEndPointUrl();
//   let url = `${endPointUrl}/chat/threads/${threadId}/messages?maxPageSize=${maxPageSize}&api-version=2021-09-07`;
//   if(startTime){
//     url += `&startTime=${startTime}`;
//   }
//   return url;
// };

// const getReadReceiptUrl = (threadId, maxPageSize) => {
//   const endPointUrl = getAcsEndPointUrl();
//   return `${endPointUrl}/chat/threads/${threadId}/readReceipts?maxPageSize=${maxPageSize}&api-version=2021-09-07`;
// };

// const sendReadReceiptUrl = (threadId) => {
//   const endPointUrl = getAcsEndPointUrl();
//   return `${endPointUrl}/chat/threads/${threadId}/readReceipts?&api-version=2021-09-07`;
// };

// module.exports = {
//   getAcsAccessKey,
//   getAcsEndPointUrl,

//   createIdentityUrl,
//   refreshTokenUrl,
//   deleteIdentityUrl,
//   createChatThreadUrl,
//   getChatThreadUrl,
//   getChatThreadParticipantUrl,
//   addChatThreadParticipantUrl,
//   getChatMessageUrl,
//   getReadReceiptUrl,
//   sendReadReceiptUrl,
// }
