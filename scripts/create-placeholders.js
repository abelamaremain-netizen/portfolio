// scripts/create-placeholders.js
const fs = require('fs')
const path = require('path')

// Minimal 1×1 transparent PNG (base64)
const PNG_BASE64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='
// Minimal 1×1 white JPEG (base64)
const JPG_BASE64 = '/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARC' + 'AABAAEDASIA/8QAFgABAQEAAAAAAAAAAAAAAAAABgUEA/8QAIRAAAQMEAgMAAAAAAAAAAAAAAQIDBAAFERIhMUH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Amk2ta0lKUpSlKUpSlKUpSlKUpSlKUpSlKUpSlKUpSlKUpSlKUpSlKUpX/2Q=='

fs.mkdirSync(path.join(__dirname, '../public/images/projects'), { recursive: true })
fs.mkdirSync(path.join(__dirname, '../public/images'), { recursive: true })
fs.writeFileSync(path.join(__dirname, '../public/images/projects/legalcase.png'), Buffer.from(PNG_BASE64, 'base64'))
fs.writeFileSync(path.join(__dirname, '../public/images/projects/cooperative.png'), Buffer.from(PNG_BASE64, 'base64'))
fs.writeFileSync(path.join(__dirname, '../public/images/avatar.jpg'), Buffer.from(JPG_BASE64, 'base64'))
console.log('Placeholder images created.')
