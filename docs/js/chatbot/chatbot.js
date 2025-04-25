/**
 * Simple Chatbot for David Khalifa's Personal Website
 */

document.addEventListener('DOMContentLoaded', function() {
    // Create the chatbot UI elements
    createChatbotUI();
    
    // Initialize the chatbot functionality
    initChatbot();
});

// Create and append the chatbot UI elements to the DOM
function createChatbotUI() {
    // Create the main chatbot container
    const chatbotContainer = document.createElement('div');
    chatbotContainer.className = 'chatbot-container';
    chatbotContainer.innerHTML = `
        <div class="chatbot-toggle">
            <i class="fas fa-comments"></i>
        </div>
        <div class="chatbot-box">
            <div class="chatbot-header">
                <h3>Chat with David's Bot</h3>
                <button class="chatbot-close">&times;</button>
            </div>
            <div class="chatbot-messages">
                <div class="message bot">
                    Hi there! I'm David's virtual assistant. How can I help you today?
                </div>
            </div>
            <div class="chatbot-input-container">
                <input type="text" class="chatbot-input" placeholder="Type your message here...">
                <button class="chatbot-send">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(chatbotContainer);
    
    // Add styles for the chatbot
    addChatbotStyles();
}

// Add the necessary CSS for the chatbot
function addChatbotStyles() {
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        .chatbot-container {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 9999;
            font-family: 'Open Sans', sans-serif;
        }
        
        .chatbot-toggle {
            width: 60px;
            height: 60px;
            background-color: #3498db;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 24px;
            cursor: pointer;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            transition: all 0.3s ease;
        }
        
        .chatbot-toggle:hover {
            transform: scale(1.05);
            background-color: #2980b9;
        }
        
        .chatbot-box {
            display: none;
            width: 350px;
            height: 450px;
            background-color: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            position: absolute;
            bottom: 70px;
            right: 0;
            transition: all 0.3s ease;
            flex-direction: column;
        }
        
        .chatbot-header {
            background-color: #3498db;
            color: white;
            padding: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .chatbot-header h3 {
            margin: 0;
            font-size: 16px;
        }
        
        .chatbot-close {
            background: none;
            border: none;
            color: white;
            font-size: 24px;
            cursor: pointer;
        }
        
        .chatbot-messages {
            flex: 1;
            padding: 15px;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            gap: 10px;
            height: 310px;
        }
        
        .message {
            padding: 10px 15px;
            border-radius: 20px;
            max-width: 80%;
            word-break: break-word;
        }
        
        .message.user {
            background-color: #e1f0fa;
            color: #333;
            align-self: flex-end;
            border-bottom-right-radius: 5px;
        }
        
        .message.bot {
            background-color: #f1f1f1;
            color: #333;
            align-self: flex-start;
            border-bottom-left-radius: 5px;
        }
        
        .chatbot-input-container {
            display: flex;
            border-top: 1px solid #eee;
            padding: 10px;
        }
        
        .chatbot-input {
            flex: 1;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 20px;
            outline: none;
            font-family: inherit;
        }
        
        .chatbot-send {
            background-color: #3498db;
            color: white;
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-left: 10px;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .chatbot-send:hover {
            background-color: #2980b9;
        }
        
        @media (max-width: 480px) {
            .chatbot-box {
                width: 300px;
                right: 0;
                bottom: 70px;
            }
        }
    `;
    
    document.head.appendChild(styleElement);
    
    // Try to load Font Awesome if not already loaded
    if (!document.querySelector('link[href*="font-awesome"]')) {
        const fontAwesomeLink = document.createElement('link');
        fontAwesomeLink.rel = 'stylesheet';
        fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
        document.head.appendChild(fontAwesomeLink);
    }
}

// Initialize the chatbot functionality
function initChatbot() {
    const chatbotToggle = document.querySelector('.chatbot-toggle');
    const chatbotBox = document.querySelector('.chatbot-box');
    const chatbotClose = document.querySelector('.chatbot-close');
    const chatbotInput = document.querySelector('.chatbot-input');
    const chatbotSend = document.querySelector('.chatbot-send');
    const chatbotMessages = document.querySelector('.chatbot-messages');
    
    // Toggle chatbot visibility
    chatbotToggle.addEventListener('click', () => {
        chatbotBox.style.display = chatbotBox.style.display === 'flex' ? 'none' : 'flex';
        chatbotInput.focus();
        scrollToBottom();
    });
    
    // Close chatbot
    chatbotClose.addEventListener('click', () => {
        chatbotBox.style.display = 'none';
    });
    
    // Send message on button click
    chatbotSend.addEventListener('click', sendMessage);
    
    // Send message on Enter key
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Function to send user message and get bot response
    function sendMessage() {
        const userMessage = chatbotInput.value.trim();
        if (userMessage === '') return;
        
        // Add user message to chat
        addMessageToChat('user', userMessage);
        
        // Clear input
        chatbotInput.value = '';
        
        // Show typing indicator
        addTypingIndicator();
        
        // Get bot response after a short delay to simulate thinking
        setTimeout(() => {
            removeTypingIndicator();
            const botResponse = getBotResponse(userMessage);
            addMessageToChat('bot', botResponse);
        }, 1000);
    }
    
    // Add a message to the chat
    function addMessageToChat(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${sender}`;
        messageElement.textContent = message;
        chatbotMessages.appendChild(messageElement);
        scrollToBottom();
    }
    
    // Add typing indicator
    function addTypingIndicator() {
        const typingElement = document.createElement('div');
        typingElement.className = 'message bot typing';
        typingElement.innerHTML = '<span>.</span><span>.</span><span>.</span>';
        typingElement.id = 'typing-indicator';
        chatbotMessages.appendChild(typingElement);
        scrollToBottom();
    }
    
    // Remove typing indicator
    function removeTypingIndicator() {
        const typingElement = document.getElementById('typing-indicator');
        if (typingElement) {
            typingElement.remove();
        }
    }
    
    // Scroll to bottom of messages
    function scrollToBottom() {
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    // Get bot response based on user input
    function getBotResponse(userMessage) {
        userMessage = userMessage.toLowerCase();
        
        // Simple responses based on keywords
        if (userMessage.includes('hello') || userMessage.includes('hi') || userMessage.includes('hey')) {
            return "Hello! How can I help you learn more about David?";
        }
        else if (userMessage.includes('name')) {
            return "I'm David's virtual assistant. David Khalifa is a Principal Software Architect at Microsoft.";
        }
        else if (userMessage.includes('experience') || userMessage.includes('work')) {
            return "David has extensive experience in cloud architecture, software development, and leading technical teams. He currently works at Microsoft as a Principal Software Architect in the Cloud + AI division.";
        }
        else if (userMessage.includes('skills') || userMessage.includes('expertise')) {
            return "David's expertise includes cloud architecture, AI/ML solutions, enterprise software design, and technical leadership. He's proficient with Azure, AWS, .NET, and various other technologies.";
        }
        else if (userMessage.includes('education') || userMessage.includes('degree')) {
            return "David has a strong educational background in Computer Science with relevant certifications in cloud technologies.";
        }
        else if (userMessage.includes('contact') || userMessage.includes('email') || userMessage.includes('reach')) {
            return "You can contact David through the contact form on this website or via email at david.kkhalifa@gmail.com.";
        }
        else if (userMessage.includes('projects') || userMessage.includes('portfolio')) {
            return "David has worked on numerous projects including enterprise cloud migrations, AI-enabled platforms, and large-scale digital transformations. Check out the Projects section on this website for more details.";
        }
        else if (userMessage.includes('resume')) {
            return "You can view or download David's resume on the Resume page of this website.";
        }
        else if (userMessage.includes('thank')) {
            return "You're welcome! Is there anything else you'd like to know?";
        }
        else {
            return "I'm a simple bot with limited knowledge about David. For more specific information, please check the relevant sections of the website or use the contact form to reach out directly.";
        }
    }
}