const itemsData = [
            { name: "Python", desc: "A versatile language for AI, data, and web." },
            { name: "JavaScript", desc: "The programming language of the Web." },
            { name: "C", desc: "A powerful, low-level system programming language." },
            { name: "C++", desc: "For system programming, games, and high-performance apps." },
            { name: "Java", desc: "The enterprise-level, object-oriented giant." },
            { name: "C#", desc: "Microsoft's language for .NET and game development (Unity)." },
            { name: "PHP", desc: "The backbone of WordPress and large web applications." },
            { name: "Go", desc: "Google's language for fast, concurrent systems." },
            { name: "Rust", desc: "A system programming language focused on safety and speed." },
            { name: "Swift", desc: "Apple's language for iOS and macOS development." },
            { name: "Kotlin", desc: "The modern, preferred language for Android development." },
            { name: "Ruby", desc: "Known for the Ruby on Rails web framework." },
            { name: "TypeScript", desc: "JavaScript with static types for scaling apps." },
            { name: "R", desc: "Primarily used for statistical computing and graphics." },
            { name: "MATLAB", desc: "A proprietary multi-paradigm programming environment." },
            { name: "Bash", desc: "The default shell on Linux and macOS." },
            { name: "Shell Script", desc: "Automate tasks on Unix-like operating systems." },
            { name: "PowerShell", desc: "Microsoft's task automation framework for Windows." },
            { name: "Perl", desc: "Known for text processing and reporting." },
            { name: "Lua", desc: "A lightweight, embeddable scripting language." },
            { name: "MySQL", desc: "The world's most popular open-source database." },
            { name: "PostgreSQL", desc: "A powerful, open-source object-relational database." },
            { name: "SQLite", desc: "A C-language library that implements a small, fast, self-contained database engine." },
            { name: "MariaDB", desc: "A community-developed fork of MySQL." },
            { name: "MongoDB", desc: "A popular NoSQL document database." },
            { name: "Firebase", desc: "Google's mobile and web application development platform." },
            { name: "Cassandra", desc: "A highly scalable NoSQL database." },
            { name: "Redis", desc: "An open-source, in-memory data structure store." },
            { name: "Neo4j", desc: "A leading graph database management system." },
            { name: "DynamoDB", desc: "AWS's proprietary NoSQL database service." },
            { name: "Django", desc: "A high-level Python web framework for rapid development." },
            { name: "Flask", desc: "A lightweight Python web framework." },
            { name: "FastAPI", desc: "A modern, fast (high-performance) web framework for building APIs with Python." },
            { name: "Laravel", desc: "A popular PHP web framework." },
            { name: "Express.js", desc: "A minimal and flexible Node.js web application framework." },
            { name: "Spring Boot", desc: "A Java-based framework for creating standalone, production-grade Spring applications." },
            { name: "ASP.NET Core", desc: "A cross-platform, high-performance framework for building modern, cloud-based, internet-connected applications." },
            { name: "React.js", desc: "A JavaScript library for building user interfaces." },
            { name: "Next.js", desc: "A React framework for production-ready applications." },
            { name: "Angular", desc: "A platform for building mobile and desktop web applications." },
            { name: "Vue.js", desc: "A progressive JavaScript framework for building user interfaces." },
            { name: "Svelte", desc: "A new approach to building user interfaces; compiles code to tiny, vanilla JS." },
            { name: "React Native", desc: "A framework for building native mobile apps with React." },
            { name: "Flutter", desc: "Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase." },
            { name: "TensorFlow", desc: "An open-source machine learning framework developed by Google." },
            { name: "PyTorch", desc: "An open-source machine learning library primarily used for deep learning." },
            { name: "Scikit-learn", desc: "A free software machine learning library for Python." },
            { name: "Keras", desc: "A high-level neural networks API, written in Python and capable of running on top of TensorFlow, CNTK, or Theano." },
            { name: "OpenCV", desc: "An open-source computer vision and machine learning software library." },
            { name: "Docker", desc: "A platform for developing, shipping, and running applications in containers." },
            { name: "Kubernetes", desc: "An open-source container orchestration system." },
            { name: "Git", desc: "A distributed version control system." },
            { name: "GitHub", desc: "A platform for version control and collaboration." },
            { name: "Jenkins", desc: "An open-source automation server for CI/CD." },
            { name: "AWS", desc: "Amazon Web Services, a comprehensive cloud computing platform." },
            { name: "Google Cloud", desc: "Google's suite of cloud computing services." },
            { name: "Azure", desc: "Microsoft's cloud computing platform." },
            { name: "Render", desc: "A unified platform for building and running all your apps and websites." },
            { name: "Pandas", desc: "A Python library for data manipulation and analysis." },
            { name: "NumPy", desc: "A fundamental package for numerical computing with Python." },
            { name: "Matplotlib", desc: "A comprehensive library for creating static, animated, and interactive visualizations in Python." },
            { name: "Seaborn", desc: "A Python data visualization library based on matplotlib." },
            { name: "Power BI", desc: "Microsoft's interactive data visualization software product." },
            { name: "Tableau", desc: "An interactive data visualization product focused on business intelligence." },
            { name: "Spark", desc: "A unified analytics engine for large-scale data processing." },
            { name: "Hadoop", desc: "An open-source framework for distributed storage and processing of large datasets." },
            { name: "Wireshark", desc: "A free and open-source packet analyzer." },
            { name: "Metasploit", desc: "A penetration testing framework." },
            { name: "Nmap", desc: "A network scanner for security auditing." },
            { name: "Kali Linux", desc: "A Debian-derived Linux distribution designed for digital forensics and penetration testing." },
            { name: "VS Code", desc: "A free source-code editor made by Microsoft." },
            { name: "Postman", desc: "An API platform for building and using APIs." },
            { name: "Figma", desc: "A web-based collaborative interface design tool." },
            { name: "Swagger", desc: "Tools for documenting and testing APIs." },
            { name: "Selenium", desc: "A portable framework for testing web applications." },
            { name: "BeautifulSoup", desc: "A Python library for pulling data out of HTML and XML files." },
            { name: "Scrapy", desc: "A fast high-level web crawling and web scraping framework for Python." },
            { name: "Jupyter Notebook", desc: "An open-source web application that allows you to create and share documents that contain live code, equations, visualizations, and narrative text." },
            { name: "Anaconda", desc: "A distribution of the Python and R programming languages for scientific computing." },
            { name: "Virtualenv", desc: "A tool to create isolated Python environments." },
            { name: "Pandoc", desc: "A universal document converter." },
            { name: "Streamlit", desc: "An open-source app framework for Machine Learning and Data Science teams." },
            { name: "LangChain", desc: "A framework for developing applications powered by language models." },
            { name: "OpenAI API", desc: "An API for accessing AI models developed by OpenAI." },
            { name: "Hugging Face", desc: "A platform providing tools to build, train and deploy ML models." },
            { name: "Vercel", desc: "A platform for frontend developers, providing tools to build, deploy, and scale web applications." },
            { name: "Firebase Hosting", desc: "Fast and secure hosting for your web app, static, and dynamic content." },
            { name: "GitLab", desc: "A complete DevOps platform." },
            { name: "Docker Compose", desc: "A tool for defining and running multi-container Docker applications." },
        ];
        
        // यह सुनिश्चित करने के लिए कि कम से कम 50 कार्ड हों, डुप्लीकेट करें (यदि आवश्यक हो)
        if (itemsData.length < 50) {
            console.warn(`Only ${itemsData.length} items provided. Duplicating to reach 50 for effective carousel display.`);
            while (itemsData.length < 50) {
                itemsData.push(...itemsData);
            }
        }
        
        let currentIndex = 0;
        const intervalTime = 2000; // 2 सेकंड होल्ड
        const wrapper = document.getElementById('cardWrapper');
        const carouselContainer = document.querySelector('.carousel-container');

        /**
         * कार्ड के लिए HTML बनाता है
         */
        function createCard(data) {
            const card = document.createElement('div');
            card.className = 'language-card';
            card.innerHTML = `
                <div class="border-animation-wrapper"></div>
                <a href="https://example.com/learn-${data.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}" target="_blank" class="card-text-link">
                    <h1 class="card-title">${data.name}</h1>
                    <p class="card-desc">Learn about ${data.name}</p>
                </a>
                <a href="https://example.com/learn-${data.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}" target="_blank" class="btn btn-green">Learn ${data.name}</a>
                <a href="https://example.com/video-${data.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}" target="_blank" class="btn btn-yellow">Video Tutorial</a>
                <a href="https://example.com/ref-${data.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}" target="_blank" class="btn btn-dark">${data.name} Reference</a>
                <a href="https://example.com/cert-${data.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}" target="_blank" class="btn btn-pink">Get Certified</a>
            `;
            return card;
        }

        /**
         * सभी कार्ड्स को DOM में जोड़ता है
         */
        function renderCards() {
            itemsData.forEach(data => {
                wrapper.appendChild(createCard(data));
            });
            // लूपिंग के लिए, हम पहले कार्ड की एक क्लोन कॉपी अंत में जोड़ते हैं
            // यह सुनिश्चित करने के लिए कि यह सही है, पहला 2-3 कार्ड क्लोन करें
            for(let i = 0; i < 3; i++) { // क्लोन 3 कार्ड्स ताकि लूपिंग स्मूथ हो
                wrapper.appendChild(createCard(itemsData[i])); 
            }
        }

        /**
         * अगले कार्ड पर स्लाइड करता है (स्क्रॉल स्नैप का उपयोग करके)
         */
        function slideNext() {
            const totalOriginalItems = itemsData.length;
            const totalClonedItems = 3; // हमने जितने क्लोन किए हैं
            const totalRenderedItems = totalOriginalItems + totalClonedItems;
            
            currentIndex++;

            // यदि हम क्लोन किए गए आइटमों में प्रवेश कर चुके हैं
            if (currentIndex >= totalOriginalItems) {
                // स्लाइड करके पहले क्लोन कार्ड पर जाएँ (जो original itemsData[0] है)
                const targetCard = wrapper.children[currentIndex];
                const scrollPosition = targetCard.offsetLeft - (carouselContainer.offsetWidth / 2) + (targetCard.offsetWidth / 2);

                carouselContainer.scrollTo({
                    left: scrollPosition,
                    behavior: 'smooth'
                });
                
                // 500ms (ट्रांज़िशन समय) के बाद तुरंत 0 इंडेक्स पर वापस कूदें
                setTimeout(() => {
                    carouselContainer.scrollTo({
                        left: 0, 
                        behavior: 'instant' // तुरंत कूदना (कोई एनीमेशन नहीं)
                    });
                    currentIndex = 0; // इंडेक्स रीसेट
                }, 500); // CSS ट्रांज़िशन के अनुरूप समय
            } else {
                // सामान्य स्लाइडिंग
                const cardElement = wrapper.children[currentIndex];
                const scrollPosition = cardElement.offsetLeft - (carouselContainer.offsetWidth / 2) + (cardElement.offsetWidth / 2);
                
                carouselContainer.scrollTo({
                    left: scrollPosition,
                    behavior: 'smooth'
                });
            }
        }

        /**
         * मुख्य ऑटो-स्लाइडिंग लूप शुरू करता है
         */
        function startAutoSlide() {
            setInterval(slideNext, intervalTime);
        }
        
        // --- Initialization ---
        window.onload = function() {
            renderCards(); // कार्ड्स को DOM में जोड़ें
            startAutoSlide(); // स्लाइडिंग शुरू करें
        };
