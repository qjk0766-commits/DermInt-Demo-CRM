// --- 1. DATA LAYER (MOCK DB) ---
const DB = {
    // Початкові дані (SEED DATA)
    patients: [
        {
            id: "UA-2023-884", 
            firstName: "Олена", lastName: "Коваленко", middleName: "Петрівна",
            dob: "1988-04-12", gender: "female", phone: "+380 50 123 45 67", city: "Київ",
            tags: ["VIP", "Трихологія"],
            completeness: 100, status: "active",
            medical: {
                allergies: ["Пеніцилін"], chronic: ["Гастрит"],
                complaints: "Випадіння волосся, сухість шкіри.",
                diagnosis: [{ date: "2023-10-01", code: "L64.9", name: "Андрогенетична алопеція" }],
                labResults: [{ date: "2023-11-10", name: "Феритин", val: "12 нг/мл", status: "low" }]
            },
            visits: [
                { date: "2023-12-28", time: "15:00", type: "Мезотерапія", doctor: "Др. Тернущак", price: 1500, status: "completed" },
                { date: "2024-01-15", time: "15:00", type: "Консультація", doctor: "Др. Тернущак", price: 800, status: "scheduled" }
            ],
            payments: [
                { id: "INV-005", date: "2023-12-28", service: "Мезотерапія", amount: 1500, method: "card", status: "paid" },
                { id: "INV-006", date: "2023-11-26", service: "Мезотерапія", amount: 1500, method: "card", status: "partially-paid", due: 500 }
            ],
            photos: [
                { src: "https://placehold.co/300x300/fce7f3/db2777?text=Scalp+V1", tag: "Трихоскопія", date: "2023-10-01" },
                { src: "https://placehold.co/300x300/fecaca/991b1b?text=Redness", tag: "Макро", date: "2023-11-15" }
            ],
            docs: [
                { name: "Інформована згода", type: "pdf", size: "1.2 MB", date: "2023-10-01" }
            ]
        },
        {
            id: "UA-2023-885", 
            firstName: "Іван", lastName: "Іваненко", middleName: "Іванович",
            dob: "1982-08-20", gender: "male", phone: "+380 97 555 22 11", city: "Львів",
            tags: ["Дерматологія", "Псоріаз"],
            completeness: 85, status: "active",
            medical: {
                allergies: [], chronic: ["Гіпертонія"],
                complaints: "Висипання на ліктях, свербіж.",
                diagnosis: [{ date: "2023-09-15", code: "L40.0", name: "Псоріаз звичайний" }],
                labResults: [{ date: "2023-09-15", name: "ЗАК", val: "Норма", status: "norm" }]
            },
            visits: [
                { date: "2023-09-15", time: "10:00", type: "Первинна", doctor: "Др. Тернущак", price: 1000, status: "completed" },
                { date: "2023-12-10", time: "11:00", type: "Контроль", doctor: "Др. Тернущак", price: 600, status: "completed" }
            ],
            payments: [
                { id: "INV-020", date: "2023-12-10", service: "Консультація", amount: 600, method: "cash", status: "paid" }
            ],
            photos: [
                { src: "https://placehold.co/300x300/e2e8f0/64748b?text=Elbow+Psoriasis", tag: "Клінічне", date: "2023-09-15" }
            ],
            docs: []
        },
        {
            id: "UA-2023-886", 
            firstName: "Марія", lastName: "Петренко", middleName: "Сергіївна",
            dob: "1995-02-14", gender: "female", phone: "+380 63 999 88 77", city: "Київ",
            tags: ["Акне", "Косметологія"],
            completeness: 60, status: "lead",
            medical: {
                allergies: ["Лідокаїн"], chronic: [],
                complaints: "Акне, постакне рубці.",
                diagnosis: [{ date: "2024-01-05", code: "L70.0", name: "Acne vulgaris" }],
                labResults: []
            },
            visits: [
                { date: "2024-01-05", time: "14:00", type: "Консультація", doctor: "Др. Тернущак", price: 800, status: "completed" }
            ],
            payments: [
                { id: "INV-035", date: "2024-01-05", service: "Консультація", amount: 800, method: "card", status: "paid" }
            ],
            photos: [], docs: []
        },
        {
            id: "UA-2023-887", 
            firstName: "Василь", lastName: "Сидоренко", middleName: "Петрович",
            dob: "1974-11-30", gender: "male", phone: "+380 66 111 22 33", city: "Одеса",
            tags: ["Дерматоонкологія"],
            completeness: 90, status: "archived",
            medical: {
                allergies: [], chronic: [],
                complaints: "Зміна кольору невуса на спині.",
                diagnosis: [{ date: "2023-11-01", code: "D22.5", name: "Меланоформний невус тулуба" }],
                labResults: [{ date: "2023-11-01", name: "Гістологія", val: "Доброякісний", status: "norm" }]
            },
            visits: [
                { date: "2023-11-01", time: "09:00", type: "Дерматоскопія", doctor: "Др. Тернущак", price: 1200, status: "completed" },
                { date: "2023-11-01", time: "09:30", type: "Видалення", doctor: "Др. Тернущак", price: 2500, status: "completed" }
            ],
            payments: [
                { id: "INV-012", date: "2023-11-01", service: "Комплекс", amount: 3700, method: "card", status: "paid" }
            ],
            photos: [
                { src: "https://placehold.co/300x300/374151/fff?text=Nevus+Macro", tag: "Дерматоскопія", date: "2023-11-01" }
            ],
            docs: []
        }
    ],
    globalDocs: [
        { name: "Наказ МОЗ №123", type: "pdf", size: "2.4 MB", date: "2023-01-01" },
        { name: "Прайс-лист 2024", type: "xlsx", size: "0.5 MB", date: "2024-01-01" },
        { name: "Шаблон згоди пацієнта", type: "docx", size: "0.1 MB", date: "2023-05-12" }
    ],
    // Calendar events mapped to simple day/hour for grid
    calendarEvents: [
        { id: 1, day: 2, hour: 10, title: "Іваненко І.", type: "Контроль", patientId: "UA-2023-885" }, // Tue 10:00
        { id: 2, day: 4, hour: 15, title: "Коваленко О.", type: "Мезо", patientId: "UA-2023-884" }, // Thu 15:00
        { id: 3, day: 5, hour: 9, title: "Петренко М.", type: "Консультація", patientId: "UA-2023-886" }, // Fri 09:00
        { id: 4, day: 1, hour: 12, title: "Сидоренко В.", type: "Видалення", patientId: "UA-2023-887" } // Mon 12:00
    ],
    drafts: [
        { id: 1, date: "2023-12-20", title: "Нотатка про реакцію", content: "Коваленко: свербіж після мезо. Змінити коктейль." },
        { id: 2, date: "2024-01-10", title: "Закупівля", content: "Потрібно замовити філери та ботокс до кінця місяця." }
    ]
};

// --- 2. STATE MANAGEMENT & LOGIC ---
const app = {
    state: {
        view: 'patients',
        patientId: null,
        mode: 'view',
        searchQuery: '',
        activeTab: 'medical',
        pinLocked: true,
        pin: '1234',
        notifications: 2
    },

    // --- UTILS ---
    generateId: () => 'ID-' + Math.floor(Math.random() * 10000),
    getTodayDate: () => new Date().toISOString().split('T')[0],
    
    // --- ACTIONS ---
    
    // 1. Create Patient
    addPatient: () => {
        const nameInput = document.getElementById('new-patient-name').value;
        const phoneInput = document.getElementById('new-patient-phone').value;
        const dobInput = document.getElementById('new-patient-dob').value;

        if (!nameInput) { app.showToast('Введіть ПІБ пацієнта', 'error'); return; }

        const nameParts = nameInput.split(' ');
        const newPatient = {
            id: app.generateId(),
            lastName: nameParts[0] || "Новий",
            firstName: nameParts[1] || "Пацієнт",
            middleName: nameParts[2] || "",
            dob: dobInput || "1990-01-01",
            gender: "female", // Default for demo
            phone: phoneInput || "+380 00 000 00 00",
            city: "Київ",
            tags: ["Новий"],
            completeness: 15,
            status: "new",
            medical: { allergies: [], chronic: [], complaints: "", diagnosis: [], labResults: [] },
            visits: [],
            payments: [],
            photos: [],
            docs: []
        };

        DB.patients.unshift(newPatient); // Add to top of list
        app.closeModal();
        app.showToast(`Пацієнта ${newPatient.lastName} створено`, 'success');
        
        // Go to new patient
        app.state.searchQuery = ''; // Clear search to show all
        app.navigateTo('patients');
        app.selectPatient(newPatient.id);
    },

    // 2. Add Appointment
    addAppointment: () => {
        const patientName = document.getElementById('new-appt-patient').value;
        const date = document.getElementById('new-appt-date').value;
        const time = document.getElementById('new-appt-time').value;
        const type = document.getElementById('new-appt-type').value;

        if (!patientName || !date || !time) { app.showToast('Заповніть всі поля', 'error'); return; }

        // Determine Day Index for Calendar Grid (Mock logic: Hash date to 1-7)
        // In a real app, this would calculate actual day of week
        const dayIndex = (new Date(date).getDay()) || 1; 
        const hour = parseInt(time.split(':')[0]);

        // Add to Global Calendar
        DB.calendarEvents.push({
            id: app.generateId(),
            day: dayIndex,
            hour: hour,
            title: patientName.split(' ')[0],
            type: type
        });

        // Add to Patient Record if we are in a patient profile
        if (app.state.patientId) {
            const p = DB.patients.find(x => x.id === app.state.patientId);
            if(p) {
                p.visits.unshift({
                    date: date,
                    time: time,
                    type: type,
                    doctor: "Др. Тернущак",
                    price: 0, // Pending
                    status: "scheduled"
                });
            }
        }

        app.closeModal();
        app.showToast('Запис успішно створено', 'success');
        app.render(); // Refresh view
    },

    // 3. Add Payment
    addPayment: () => {
        const amount = parseFloat(document.getElementById('new-pay-amount').value);
        const method = document.getElementById('new-pay-method').value; // Need to grab text from buttons in real UI, simpler here
        
        if (!amount) { app.showToast('Введіть суму', 'error'); return; }

        if (app.state.patientId) {
            const p = DB.patients.find(x => x.id === app.state.patientId);
            if(p) {
                p.payments.unshift({
                    id: "INV-" + Math.floor(Math.random() * 1000),
                    date: app.getTodayDate(),
                    service: "Послуга (Ручне введення)",
                    amount: amount,
                    method: "card", // Default for demo
                    status: "paid"
                });
                // Recalculate completeness slightly for interaction
                p.completeness = Math.min(100, p.completeness + 5);
            }
        } else {
            // Global payment context logic could go here
        }

        app.closeModal();
        app.showToast(`Оплату ${amount} ₴ проведено`, 'success');
        app.render();
    },

    // 4. Add Note (Draft)
    addDraft: () => {
        const title = document.getElementById('new-draft-title').value;
        const text = document.getElementById('new-draft-text').value;
        
        if(!title) { app.showToast('Введіть заголовок', 'error'); return; }

        DB.drafts.unshift({
            id: app.generateId(),
            date: app.getTodayDate(),
            title: title,
            content: text
        });

        app.closeModal();
        app.showToast('Нотатку збережено', 'success');
        app.render();
    },

    // 5. Upload Document (Mock)
    uploadDoc: () => {
        // Just simulates adding a file
        const p = DB.patients.find(x => x.id === app.state.patientId);
        if(p) {
            p.docs.unshift({
                name: "Завантажений файл.pdf",
                type: "pdf",
                size: "0.5 MB",
                date: app.getTodayDate()
            });
            // Also add to global docs
            DB.globalDocs.unshift({
                name: `${p.lastName} - Результати.pdf`,
                type: "pdf",
                size: "0.5 MB",
                date: app.getTodayDate()
            });
        }
        app.closeModal();
        app.showToast('Файл завантажено', 'success');
        app.render();
    },

    // --- NAVIGATION & UI ---
    navigateTo(view) {
        this.state.view = view;
        if (view !== 'patients') this.state.patientId = null;
        this.render();
        
        document.querySelectorAll('#sidebar-menu button').forEach(b => {
            b.className = b.className.replace('bg-medical-50 text-medical-700', 'text-gray-600');
        });
        const activeBtn = document.getElementById(`nav-${view}`);
        if(activeBtn) activeBtn.className = activeBtn.className.replace('text-gray-600', 'bg-medical-50 text-medical-700');

        if (window.innerWidth < 1024) this.toggleSidebar(false);
    },

    selectPatient(id) {
        this.state.patientId = id;
        this.state.activeTab = 'medical';
        this.render();
    },

    clearPatientSelection() {
        this.state.patientId = null;
        this.render();
    },

    toggleSidebar(forceState) {
        const sb = document.getElementById('sidebar');
        const overlay = document.getElementById('mobile-overlay');
        const isClosed = sb.classList.contains('-translate-x-full');
        const shouldOpen = forceState !== undefined ? forceState : isClosed;

        if (shouldOpen) {
            sb.classList.remove('-translate-x-full');
            overlay.classList.remove('hidden');
        } else {
            sb.classList.add('-translate-x-full');
            overlay.classList.add('hidden');
        }
    },

    setMode(mode) {
        this.state.mode = mode;
        this.updateModeUI();
        this.render();
        this.showToast(mode === 'edit' ? 'Режим редагування' : 'Режим перегляду', 'info');
    },

    toggleMobileMode() {
        this.setMode(this.state.mode === 'view' ? 'edit' : 'view');
    },

    updateModeUI() {
        const btnView = document.getElementById('btn-mode-view');
        const btnEdit = document.getElementById('btn-mode-edit');
        const mobIcon = document.getElementById('mobile-mode-icon');
        
        if (this.state.mode === 'view') {
            if(btnView) btnView.className = "px-3 py-1.5 rounded-md text-xs font-semibold shadow-sm bg-white text-gray-800";
            if(btnEdit) btnEdit.className = "px-3 py-1.5 rounded-md text-xs font-medium text-gray-500 hover:text-gray-900";
            if(mobIcon) { mobIcon.className = "fa-solid fa-pen-to-square text-lg"; mobIcon.parentElement.classList.remove('text-medical-600'); }
        } else {
            if(btnView) btnView.className = "px-3 py-1.5 rounded-md text-xs font-medium text-gray-500 hover:text-gray-900";
            if(btnEdit) btnEdit.className = "px-3 py-1.5 rounded-md text-xs font-semibold shadow-sm bg-medical-600 text-white";
            if(mobIcon) { mobIcon.className = "fa-solid fa-eye text-lg"; mobIcon.parentElement.classList.add('text-medical-600'); }
        }
    },

    toggleMobileSearch() {
        const bar = document.getElementById('mobile-search-bar');
        bar.classList.toggle('hidden');
        if(!bar.classList.contains('hidden')) bar.querySelector('input').focus();
    },

    handleSearchInput(val) {
        this.state.searchQuery = val.toLowerCase();
        if (this.state.view === 'patients' && !this.state.patientId) {
            this.render(); 
        }
    },

    setSearchFilter(filter) {
        this.state.searchQuery = filter.toLowerCase();
        document.getElementById('global-search').value = filter;
        this.navigateTo('patients');
        this.toggleSearchHelp(false);
    },

    toggleSearchHelp(show) {
        const el = document.getElementById('search-help');
        if(show) { el.classList.remove('hidden'); setTimeout(() => el.classList.add('visible'), 10); }
        else { el.classList.remove('visible'); setTimeout(() => el.classList.add('hidden'), 200); }
    },

    login() {
        const screen = document.getElementById('login-screen');
        screen.classList.add('opacity-0');
        setTimeout(() => { screen.classList.add('hidden'); }, 500);
    },

    // --- RENDER LOGIC ---
    render() {
        const container = document.getElementById('app-content');
        const s = this.state;

        if (s.view === 'dashboard') container.innerHTML = this.views.dashboard();
        else if (s.view === 'patients') {
            if (s.patientId) container.innerHTML = this.views.patientProfile(s.patientId);
            else container.innerHTML = this.views.patientsList();
        }
        else if (s.view === 'calendar') container.innerHTML = this.views.calendar();
        else if (s.view === 'finances_global') container.innerHTML = this.views.financeGlobal();
        else if (s.view === 'docs_global') container.innerHTML = this.views.docsGlobal();
        else if (s.view === 'drafts_global') container.innerHTML = this.views.draftsGlobal();
        
        // Restore tabs scroll
        const tabs = document.getElementById('tabs-scroll');
        if(tabs && this.lastTabsScroll) tabs.scrollLeft = this.lastTabsScroll;
    },

    // --- VIEWS ---
    views: {
        dashboard: () => {
            // Dynamic Stats Calculation
            const totalVisits = DB.patients.reduce((sum, p) => sum + p.visits.length, 0);
            const totalRevenue = DB.patients.reduce((sum, p) => sum + p.payments.reduce((s, pay) => s + (pay.status==='paid'?pay.amount:0), 0), 0);
            const activePatients = DB.patients.filter(p => p.status === 'active').length;
            const avgCheck = totalVisits > 0 ? Math.round(totalRevenue / totalVisits) : 0;

            setTimeout(app.initChart, 0); 
            
            return `
            <div class="fade-in max-w-6xl mx-auto">
                <h2 class="text-xl lg:text-2xl font-bold mb-6 text-gray-800">Статистика клініки</h2>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                        <div class="text-gray-500 text-xs font-medium mb-1">Візитів (всього)</div>
                        <div class="text-2xl font-bold text-gray-900">${totalVisits}</div>
                        <div class="text-green-500 text-xs mt-1"><i class="fa-solid fa-arrow-up"></i> динамічний</div>
                    </div>
                    <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                        <div class="text-gray-500 text-xs font-medium mb-1">Виручка (всього)</div>
                        <div class="text-2xl font-bold text-gray-900 whitespace-nowrap">${totalRevenue.toLocaleString()} ₴</div>
                        <div class="text-green-500 text-xs mt-1"><i class="fa-solid fa-arrow-up"></i> динамічний</div>
                    </div>
                    <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                        <div class="text-gray-500 text-xs font-medium mb-1">Сер. чек</div>
                        <div class="text-2xl font-bold text-gray-900 whitespace-nowrap">${avgCheck.toLocaleString()} ₴</div>
                        <div class="text-gray-400 text-xs mt-1">Розраховано</div>
                    </div>
                    <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                        <div class="text-gray-500 text-xs font-medium mb-1">Активних</div>
                        <div class="text-2xl font-bold text-gray-900">${activePatients}</div>
                        <div class="text-blue-500 text-xs mt-1">Пацієнти</div>
                    </div>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div class="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 class="font-bold text-gray-700 mb-4">Динаміка доходу (Демо)</h3>
                        <div class="h-64 w-full relative"><canvas id="revenueChart"></canvas></div>
                    </div>
                    <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 class="font-bold text-gray-700 mb-4">Топ послуг</h3>
                        <ul class="space-y-4 text-sm">
                            <li class="flex justify-between"><span>Консультація</span><span class="font-bold bg-blue-50 text-blue-700 px-2 rounded">45%</span></li>
                            <li class="flex justify-between"><span>Мезотерапія</span><span class="font-bold bg-teal-50 text-teal-700 px-2 rounded">30%</span></li>
                            <li class="flex justify-between"><span>Видалення</span><span class="font-bold bg-purple-50 text-purple-700 px-2 rounded">15%</span></li>
                            <li class="flex justify-between"><span>Інше</span><span class="font-bold bg-gray-100 text-gray-700 px-2 rounded">10%</span></li>
                        </ul>
                    </div>
                </div>
            </div>`;
        },

        patientsList: () => {
            const q = app.state.searchQuery;
            const filtered = DB.patients.filter(p => 
                p.lastName.toLowerCase().includes(q) || 
                p.phone.includes(q) || 
                p.tags.some(t => t.toLowerCase().includes(q))
            );

            return `
            <div class="fade-in max-w-5xl mx-auto">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-xl font-bold text-gray-800">Список пацієнтів (${filtered.length})</h2>
                    <button onclick="app.openModal('add_patient')" class="bg-medical-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-medical-700 shadow-sm">+ Новий</button>
                </div>
                <div class="grid gap-3">
                    ${filtered.map(p => `
                        <div onclick="app.selectPatient('${p.id}')" class="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:border-medical-300 cursor-pointer flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-all">
                            <div class="flex items-center gap-4">
                                <div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold text-lg flex-shrink-0">${p.lastName[0]}</div>
                                <div>
                                    <h3 class="font-bold text-gray-900">${p.lastName} ${p.firstName}</h3>
                                    <p class="text-xs text-gray-500">${p.phone} • ${p.city}</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-4 w-full md:w-auto mt-2 md:mt-0">
                                <div class="flex-1 md:w-32 flex flex-col justify-center">
                                    <div class="flex justify-between text-[10px] text-gray-400 mb-1"><span>Профіль</span><span>${p.completeness}%</span></div>
                                    <div class="w-full bg-gray-100 rounded-full h-1.5"><div class="bg-medical-500 h-1.5 rounded-full" style="width: ${p.completeness}%"></div></div>
                                </div>
                                <div class="flex gap-1 flex-wrap">
                                    ${p.tags.map(t => `<span class="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] rounded-full border border-gray-200 whitespace-nowrap">${t}</span>`).join('')}
                                </div>
                                <i class="fa-solid fa-chevron-right text-gray-300 ml-auto"></i>
                            </div>
                        </div>
                    `).join('')}
                    ${filtered.length === 0 ? '<div class="text-center py-10 text-gray-400">Пацієнтів не знайдено</div>' : ''}
                </div>
            </div>`;
        },

        patientProfile: (id) => {
            const p = DB.patients.find(x => x.id === id);
            if (!p) return '<div class="text-center p-10">Помилка: Пацієнта не знайдено</div>';
            
            const isEdit = app.state.mode === 'edit';
            const active = app.state.activeTab;
            const balance = p.payments.reduce((acc, curr) => curr.status === 'paid' ? acc : acc + (curr.due || curr.amount), 0);

            // Tab helper
            const tabBtn = (id, icon, label) => `
                <button onclick="app.state.activeTab='${id}'; app.render()" 
                class="pb-3 px-4 text-sm font-medium border-b-2 flex items-center gap-2 whitespace-nowrap transition-colors
                ${active === id ? 'border-medical-600 text-medical-700' : 'border-transparent text-gray-500 hover:text-gray-700'}">
                <i class="fa-solid ${icon}"></i> ${label}</button>`;

            // Content
            let content = '';
            // --- TABS CONTENT ---
            if (active === 'medical') {
                content = `
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade">
                    <div class="space-y-4">
                        <div class="bg-white p-4 rounded-xl border shadow-sm">
                            <h4 class="font-bold text-gray-800 mb-2 text-sm">Діагнози</h4>
                            <ul class="space-y-2">${p.medical.diagnosis.map(d => `<li class="text-sm bg-red-50 text-red-800 px-2 py-1 rounded border border-red-100"><b>${d.code}</b> ${d.name} <span class="text-xs opacity-50 block">${d.date}</span></li>`).join('')}</ul>
                            ${isEdit ? '<button class="w-full mt-2 py-1 border border-dashed rounded text-xs text-gray-400 hover:border-medical-500 hover:text-medical-600">+ Додати</button>' : ''}
                        </div>
                        <div class="bg-white p-4 rounded-xl border shadow-sm">
                            <h4 class="font-bold text-gray-800 mb-2 text-sm">Особливості</h4>
                            <div class="text-sm"><span class="text-gray-500">Алергії:</span> ${p.medical.allergies.join(', ') || 'Немає'}</div>
                            <div class="text-sm mt-1"><span class="text-gray-500">Хронічні:</span> ${p.medical.chronic.join(', ') || 'Немає'}</div>
                        </div>
                    </div>
                    <div class="lg:col-span-2 space-y-4">
                        <div class="bg-white p-4 rounded-xl border shadow-sm">
                            <h4 class="font-bold text-gray-800 mb-2 text-sm">Анамнез</h4>
                            ${isEdit ? `<textarea class="w-full border rounded p-2 text-sm h-24 focus:outline-none focus:border-medical-500">${p.medical.complaints}</textarea>` : `<p class="text-sm text-gray-600">${p.medical.complaints}</p>`}
                        </div>
                        <div class="bg-white p-4 rounded-xl border shadow-sm">
                            <h4 class="font-bold text-gray-800 mb-2 text-sm">Аналізи (Останні)</h4>
                            <table class="w-full text-sm text-left">
                                <thead class="bg-gray-50 text-xs text-gray-500"><tr><th class="p-2">Дата</th><th class="p-2">Показник</th><th class="p-2">Рез.</th></tr></thead>
                                <tbody>${p.medical.labResults.length ? p.medical.labResults.map(l => `<tr><td class="p-2 text-gray-500">${l.date}</td><td class="p-2 font-medium">${l.name}</td><td class="p-2"><span class="px-1.5 py-0.5 rounded text-xs ${l.status==='norm'?'bg-green-100 text-green-700':'bg-yellow-100 text-yellow-700'}">${l.val}</span></td></tr>`).join('') : '<tr><td colspan="3" class="p-2 text-center text-xs text-gray-400">Немає аналізів</td></tr>'}</tbody>
                            </table>
                        </div>
                    </div>
                </div>`;
            } else if (active === 'visits') {
                content = `
                <div class="bg-white rounded-xl border shadow-sm overflow-hidden animate-fade">
                    <table class="w-full text-sm text-left">
                        <thead class="bg-gray-50 text-xs text-gray-500 uppercase font-bold"><tr><th class="p-4">Дата</th><th class="p-4">Послуга</th><th class="p-4 text-right">Ціна</th><th class="p-4 text-center">Статус</th></tr></thead>
                        <tbody class="divide-y divide-gray-100">
                            ${p.visits.length ? p.visits.map(v => `
                                <tr>
                                    <td class="p-4 font-medium">${v.date} <span class="text-gray-400 font-normal ml-1">${v.time}</span></td>
                                    <td class="p-4 text-gray-600">${v.type}<div class="text-xs text-gray-400">${v.doctor}</div></td>
                                    <td class="p-4 text-right font-mono">${v.price} ₴</td>
                                    <td class="p-4 text-center"><span class="px-2 py-1 rounded text-xs font-bold ${v.status==='completed'?'bg-green-100 text-green-700':'bg-blue-100 text-blue-700'}">${v.status==='completed'?'Завершено':'План'}</span></td>
                                </tr>`).join('') : '<tr><td colspan="4" class="p-6 text-center text-gray-400">Історія візитів порожня</td></tr>'}
                        </tbody>
                    </table>
                </div>`;
            } else if (active === 'photos') {
                content = `
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade">
                    ${p.photos.map(ph => `
                        <div class="group relative rounded-lg overflow-hidden border bg-white shadow-sm">
                            <img src="${ph.src}" class="w-full h-32 object-cover">
                            <div class="p-2 text-xs font-bold text-gray-700">${ph.tag} <span class="block font-normal text-gray-400">${ph.date}</span></div>
                        </div>`).join('')}
                    ${isEdit ? '<div onclick="app.openModal(\'doc\')" class="border-2 border-dashed rounded-lg flex flex-col items-center justify-center h-32 text-gray-400 hover:text-medical-600 hover:border-medical-500 cursor-pointer transition-colors"><i class="fa-solid fa-camera text-2xl mb-1"></i><span class="text-xs">Додати</span></div>' : ''}
                </div>`;
            } else if (active === 'finance') {
                content = `
                <div class="space-y-4 animate-fade">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="bg-white p-4 rounded-xl border shadow-sm"><div class="text-xs text-gray-500 uppercase">Баланс</div><div class="text-2xl font-bold ${balance>0?'text-red-500':'text-green-600'}">${balance>0 ? `-${balance}` : '0'} ₴</div></div>
                        <div class="bg-white p-4 rounded-xl border shadow-sm"><div class="text-xs text-gray-500 uppercase">Сплачено</div><div class="text-2xl font-bold text-gray-800">${p.payments.reduce((a,c)=>c.status==='paid'?a+c.amount:a+(c.amount-(c.due||0)),0)} ₴</div></div>
                    </div>
                    <div class="bg-white rounded-xl border shadow-sm overflow-hidden">
                        <div class="flex justify-between p-3 border-b items-center"><h4 class="font-bold text-sm">Транзакції</h4>${isEdit?'<button onclick="app.openModal(\'payment\')" class="text-xs bg-medical-600 text-white px-2 py-1 rounded hover:bg-medical-700">+ Оплата</button>':''}</div>
                        <table class="w-full text-sm text-left">
                            <thead class="bg-gray-50 text-xs text-gray-500"><tr><th class="p-3">ID</th><th class="p-3">Послуга</th><th class="p-3 text-right">Сума</th><th class="p-3 text-right">Статус</th></tr></thead>
                            <tbody class="divide-y divide-gray-100">
                                ${p.payments.length ? p.payments.map(pay => `<tr><td class="p-3 text-xs font-mono text-gray-400">#${pay.id}</td><td class="p-3">${pay.service}</td><td class="p-3 text-right font-mono">${pay.amount} ₴</td><td class="p-3 text-right"><span class="text-xs font-bold ${pay.status==='paid'?'text-green-600':'text-orange-500'}">${pay.status==='paid'?'Сплачено':'Частково'}</span></td></tr>`).join('') : '<tr><td colspan="4" class="p-6 text-center text-gray-400">Транзакцій немає</td></tr>'}
                            </tbody>
                        </table>
                    </div>
                </div>`;
            } else if (active === 'docs') {
                content = `
                <div class="fade-in">
                    <div class="flex justify-between items-center mb-4"><h3 class="font-bold text-gray-800">Документи пацієнта</h3>${isEdit?'<button onclick="app.openModal(\'doc\')" class="text-xs bg-medical-600 text-white px-2 py-1 rounded">+ Додати</button>':''}</div>
                    <div class="grid grid-cols-1 gap-2">
                        ${p.docs && p.docs.length ? p.docs.map(d => `
                            <div class="bg-white p-3 rounded-lg border flex items-center justify-between">
                                <div class="flex items-center gap-3">
                                    <div class="text-red-500 text-xl"><i class="fa-solid fa-file-pdf"></i></div>
                                    <div><div class="text-sm font-bold">${d.name}</div><div class="text-xs text-gray-500">${d.date} • ${d.size}</div></div>
                                </div>
                                <button class="text-gray-400 hover:text-medical-600"><i class="fa-solid fa-download"></i></button>
                            </div>
                        `).join('') : '<div class="text-center py-8 text-gray-400">Немає документів</div>'}
                    </div>
                </div>`;
            }

            return `
            <div class="max-w-5xl mx-auto space-y-4">
                <button onclick="app.clearPatientSelection()" class="text-gray-500 text-sm hover:text-medical-600 flex items-center gap-1"><i class="fa-solid fa-arrow-left"></i> Назад до списку</button>
                
                <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex flex-col md:flex-row gap-6 items-start">
                    <div class="relative mx-auto md:mx-0">
                        <div class="w-24 h-24 rounded-full bg-medical-100 text-medical-600 flex items-center justify-center text-3xl font-bold border-4 border-white shadow-sm">${p.firstName[0]}</div>
                    </div>
                    <div class="flex-1 text-center md:text-left w-full">
                        <h2 class="text-2xl font-bold text-gray-900">${p.lastName} ${p.firstName} <span class="text-base font-normal text-gray-500">(${getAge(p.dob)} р.)</span></h2>
                        <div class="flex flex-wrap gap-2 justify-center md:justify-start mt-2">
                            ${p.tags.map(t => `<span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full border">${t}</span>`).join('')}
                        </div>
                        <div class="grid grid-cols-2 gap-4 mt-4 text-sm text-gray-600">
                            <div><i class="fa-solid fa-phone w-5 text-center text-gray-400"></i> ${p.phone}</div>
                            <div><i class="fa-solid fa-location-dot w-5 text-center text-gray-400"></i> ${p.city}</div>
                        </div>
                    </div>
                    <div class="hidden md:block">
                        <button onclick="app.openModal('appointment')" class="bg-medical-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-medical-700 shadow-sm">+ Запис</button>
                    </div>
                </div>

                <div class="bg-white rounded-2xl shadow-sm border border-gray-200 min-h-[400px]">
                    <div id="tabs-scroll" class="flex overflow-x-auto border-b border-gray-200 px-4 gap-4 hide-scrollbar sticky top-0 bg-white z-10 rounded-t-2xl" onscroll="app.lastTabsScroll=this.scrollLeft">
                        ${tabBtn('medical', 'notes-medical', 'Картка')}
                        ${tabBtn('visits', 'calendar-check', 'Візити')}
                        ${tabBtn('photos', 'camera', 'Фото')}
                        ${tabBtn('finance', 'wallet', 'Каса')}
                        ${tabBtn('docs', 'file', 'Док')}
                    </div>
                    <div class="p-6">${content}</div>
                </div>
            </div>`;
        },

        calendar: () => {
            const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];
            const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
            
            return `
            <div class="fade-in max-w-6xl mx-auto h-full flex flex-col">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold">Календар</h2>
                    <button onclick="app.openModal('appointment')" class="bg-medical-600 text-white px-3 py-1 rounded text-sm">+ Подія</button>
                </div>
                <div class="bg-white rounded-xl shadow-sm border overflow-auto flex-1">
                    <div class="min-w-[800px]">
                        <div class="grid grid-cols-[60px_repeat(7,1fr)] bg-gray-50 border-b">
                            <div class="p-2"></div>
                            ${days.map(d => `<div class="p-2 text-center font-bold text-gray-600 text-sm">${d}</div>`).join('')}
                        </div>
                        <div class="divide-y divide-gray-100">
                            ${hours.map(h => `
                                <div class="grid grid-cols-[60px_repeat(7,1fr)]">
                                    <div class="p-2 text-xs text-gray-400 text-right pr-3 border-r">${h}:00</div>
                                    ${days.map((d, i) => {
                                        const event = DB.calendarEvents.find(e => e.day === i+1 && e.hour === h);
                                        if (event) return `<div class="p-1 border-r h-16"><div class="bg-medical-100 text-medical-800 text-[10px] p-1 rounded h-full border border-medical-200 cursor-pointer overflow-hidden leading-tight font-medium hover:bg-medical-200 transition-colors" onclick="app.showToast('${event.title}: ${event.type}', 'info')">${event.title}<br/><span class="font-normal opacity-75">${event.type}</span></div></div>`;
                                        return `<div class="border-r h-16 hover:bg-gray-50 transition-colors cursor-pointer" onclick="app.openModal('appointment')"></div>`;
                                    }).join('')}
                                </div>`).join('')}
                        </div>
                    </div>
                </div>
            </div>`;
        },

        financeGlobal: () => {
            const allPayments = DB.patients.flatMap(p => p.payments.map(pay => ({...pay, patient: `${p.lastName} ${p.firstName[0]}.`})));
            return `
            <div class="fade-in max-w-5xl mx-auto">
                <h2 class="text-xl font-bold mb-4">Глобальні фінанси</h2>
                <div class="bg-white rounded-xl shadow-sm border overflow-hidden">
                    <table class="w-full text-sm text-left">
                        <thead class="bg-gray-50 text-xs uppercase text-gray-500"><tr><th class="p-4">Дата</th><th class="p-4">Пацієнт</th><th class="p-4">Послуга</th><th class="p-4 text-right">Сума</th><th class="p-4 text-right">Статус</th></tr></thead>
                        <tbody class="divide-y divide-gray-100">
                            ${allPayments.length ? allPayments.map(pay => `
                                <tr class="hover:bg-gray-50">
                                    <td class="p-4 text-gray-500">${pay.date}</td>
                                    <td class="p-4 font-bold text-gray-800">${pay.patient}</td>
                                    <td class="p-4">${pay.service}</td>
                                    <td class="p-4 text-right font-mono">${pay.amount} ₴</td>
                                    <td class="p-4 text-right"><span class="text-xs font-bold ${pay.status==='paid'?'text-green-600':'text-orange-500'}">${pay.status==='paid'?'Сплачено':'Борг'}</span></td>
                                </tr>`).join('') : '<tr><td colspan="5" class="p-6 text-center text-gray-400">Немає транзакцій</td></tr>'}
                        </tbody>
                    </table>
                </div>
            </div>`;
        },

        docsGlobal: () => {
            return `
            <div class="fade-in max-w-5xl mx-auto">
                <h2 class="text-xl font-bold mb-4">Реєстр документів клініки</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    ${DB.globalDocs.map(d => `
                        <div class="bg-white p-4 rounded-xl border shadow-sm flex items-start gap-3 hover:shadow-md transition-shadow cursor-pointer">
                            <div class="text-3xl text-gray-400"><i class="fa-solid fa-file-${d.type === 'pdf' ? 'pdf' : d.type === 'xlsx' ? 'excel' : 'word'}"></i></div>
                            <div class="flex-1 overflow-hidden">
                                <h4 class="font-bold text-sm truncate">${d.name}</h4>
                                <p class="text-xs text-gray-500">${d.date} • ${d.size}</p>
                            </div>
                            <button class="text-medical-600 hover:bg-medical-50 p-1 rounded"><i class="fa-solid fa-download"></i></button>
                        </div>`).join('')}
                    <div class="border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center p-4 text-gray-400 hover:border-medical-500 hover:text-medical-500 cursor-pointer h-20" onclick="app.openModal('doc')">
                        <span class="text-sm font-medium"><i class="fa-solid fa-cloud-arrow-up mr-2"></i> Завантажити</span>
                    </div>
                </div>
            </div>`;
        },

        draftsGlobal: () => {
            if (app.state.pinLocked) return `
                <div class="flex flex-col items-center justify-center h-[60vh]">
                    <div class="bg-white p-8 rounded-2xl shadow-lg border text-center max-w-sm w-full animate-fade">
                        <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400"><i class="fa-solid fa-lock text-xl"></i></div>
                        <h3 class="font-bold mb-2">Приватний розділ</h3>
                        <p class="text-sm text-gray-500 mb-4">Введіть PIN-код (1234)</p>
                        <input type="password" id="pin-input" maxlength="4" class="pin-input w-full border rounded-lg py-2 mb-4 focus:ring-2 focus:ring-medical-500 outline-none" placeholder="••••">
                        <button onclick="app.unlockDrafts()" class="w-full bg-medical-600 text-white font-bold py-2 rounded-lg hover:bg-medical-700">Увійти</button>
                    </div>
                </div>`;
            
            return `
            <div class="fade-in max-w-4xl mx-auto">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold">Особисті нотатки</h2>
                    <button onclick="app.lockDrafts()" class="text-xs text-red-500 hover:underline"><i class="fa-solid fa-lock"></i> Блокувати</button>
                </div>
                <div class="grid gap-4">
                    ${DB.drafts.map(d => `
                        <div class="bg-yellow-50 p-4 rounded-xl border border-yellow-200 shadow-sm relative group">
                            <div class="flex justify-between text-[10px] font-bold text-yellow-800 uppercase mb-1"><span>${d.date}</span> <button class="opacity-0 group-hover:opacity-100 hover:text-red-600 transition-opacity"><i class="fa-solid fa-trash"></i></button></div>
                            <h4 class="font-bold text-gray-900 text-sm mb-1">${d.title}</h4>
                            <p class="text-sm text-gray-700">${d.content}</p>
                        </div>`).join('')}
                    <button onclick="app.openModal('draft')" class="w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-400 font-medium hover:border-medical-500 hover:text-medical-500 transition-colors">+ Нова нотатка</button>
                </div>
            </div>`;
        }
    },

    // --- INIT ---
    init() {
        const menu = document.getElementById('sidebar-menu');
        const items = [
            { id: 'dashboard', icon: 'chart-pie', label: 'Статистика' },
            { id: 'patients', icon: 'users', label: 'Пацієнти' },
            { id: 'calendar', icon: 'calendar-check', label: 'Календар', type: 'far' },
            { id: 'finances_global', icon: 'file-invoice-dollar', label: 'Фінанси' },
            { id: 'docs_global', icon: 'folder-open', label: 'Документи' },
            { id: 'drafts_global', icon: 'user-doctor', label: 'Чернетки' }
        ];
        menu.innerHTML = items.map(i => `<li><button id="nav-${i.id}" onclick="app.navigateTo('${i.id}')" class="w-full text-left px-3 py-3 rounded-lg text-sm font-medium flex items-center transition-colors text-gray-600 hover:bg-medical-50 hover:text-medical-700"><i class="${i.type||'fa-solid'} fa-${i.icon} w-6 text-lg"></i> ${i.label}</button></li>`).join('');
        
        this.navigateTo('patients'); 
        
        document.getElementById('modal-backdrop').onclick = () => app.closeModal();
    },

    // --- MODALS ---
    openModal(type) {
        const bd = document.getElementById('modal-backdrop');
        const ct = document.getElementById('modal-content');
        bd.classList.remove('hidden'); 
        setTimeout(() => { bd.classList.remove('opacity-0'); ct.classList.remove('scale-95'); }, 10);

        let html = '';
        if(type === 'appointment') {
            // Find current patient if in profile view to prefill name
            let patientName = "";
            if (app.state.patientId) {
                const p = DB.patients.find(x => x.id === app.state.patientId);
                if(p) patientName = `${p.lastName} ${p.firstName}`;
            }

            html = `
            <div class="p-6">
                <h3 class="text-lg font-bold mb-4">Новий запис</h3>
                <div class="space-y-3 text-sm">
                    <input id="new-appt-patient" class="w-full border p-2 rounded" placeholder="Пацієнт..." value="${patientName}">
                    <div class="grid grid-cols-2 gap-3">
                        <input id="new-appt-date" type="date" class="border p-2 rounded" value="${app.getTodayDate()}">
                        <input id="new-appt-time" type="time" class="border p-2 rounded" value="10:00">
                    </div>
                    <select id="new-appt-type" class="w-full border p-2 rounded"><option>Консультація</option><option>Мезотерапія</option><option>Видалення</option><option>Огляд</option></select>
                </div>
                <div class="mt-5 flex justify-end gap-2"><button onclick="app.closeModal()" class="px-3 py-2 text-gray-500">Скасувати</button><button onclick="app.addAppointment()" class="px-3 py-2 bg-medical-600 text-white rounded hover:bg-medical-700">Зберегти</button></div>
            </div>`;
        }
        else if (type === 'add_patient') html = `
            <div class="p-6">
                <h3 class="text-lg font-bold mb-4">Нова картка</h3>
                <div class="space-y-3 text-sm">
                    <input id="new-patient-name" class="w-full border p-2 rounded focus:ring-2 focus:ring-medical-500" placeholder="ПІБ Пацієнта (Обов'язково)">
                    <div class="grid grid-cols-2 gap-3">
                        <input id="new-patient-phone" type="tel" class="border p-2 rounded" placeholder="+380...">
                        <input id="new-patient-dob" type="date" class="border p-2 rounded">
                    </div>
                </div>
                <div class="mt-5 flex justify-end gap-2"><button onclick="app.closeModal()" class="px-3 py-2 text-gray-500">Скасувати</button><button onclick="app.addPatient()" class="px-3 py-2 bg-medical-600 text-white rounded hover:bg-medical-700">Створити</button></div>
            </div>`;
        else if (type === 'settings') html = `<div class="p-6 text-center"><i class="fa-solid fa-gear text-4xl text-gray-300 mb-4"></i><h3 class="font-bold">Налаштування</h3><p class="text-sm text-gray-500 mt-2">Версія 1.0.2 (Demo).<br>Техпідтримка: support@dermint.ua</p><button onclick="app.closeModal()" class="mt-4 w-full bg-gray-100 py-2 rounded hover:bg-gray-200">Закрити</button></div>`;
        else if (type === 'notifications') html = `<div class="p-6"><h3 class="font-bold mb-4">Сповіщення</h3><div class="space-y-2"><div class="p-2 bg-blue-50 border border-blue-100 rounded text-sm text-blue-800">Системне оновлення о 23:00</div><div class="p-2 bg-gray-50 border rounded text-sm text-gray-600">Звіт за тиждень готовий</div></div><button onclick="app.closeModal(); document.getElementById('notif-badge').style.display='none'" class="mt-4 w-full bg-gray-100 py-2 rounded hover:bg-gray-200">Позначити як прочитані</button></div>`;
        else if (type === 'reminder') html = `<div class="p-6"><h3 class="font-bold mb-4">Нагадування</h3><textarea class="w-full border rounded p-2 text-sm focus:ring-2 focus:ring-medical-500" rows="3" placeholder="Текст..."></textarea><input type="datetime-local" class="w-full border rounded p-2 mt-2 text-sm"><button onclick="app.mockSave('Нагадування встановлено')" class="mt-4 w-full bg-medical-600 text-white py-2 rounded hover:bg-medical-700">Зберегти</button></div>`;
        else if (type === 'payment') html = `
            <div class="p-6">
                <h3 class="text-bold mb-4">Прийняти оплату</h3>
                <input id="new-pay-amount" type="number" class="w-full border rounded p-2 text-xl font-bold mb-3 focus:ring-2 focus:ring-green-500" placeholder="0.00">
                <select id="new-pay-method" class="w-full border rounded p-2 mb-3"><option value="card">Термінал</option><option value="cash">Готівка</option></select>
                <button onclick="app.addPayment()" class="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Оплатити</button>
            </div>`;
        else if (type === 'draft') html = `
            <div class="p-6">
                <h3 class="text-bold mb-4">Нова нотатка</h3>
                <input id="new-draft-title" class="w-full border rounded p-2 mb-2 font-bold" placeholder="Заголовок">
                <textarea id="new-draft-text" class="w-full border rounded p-2 h-24" placeholder="Текст..."></textarea>
                <button onclick="app.addDraft()" class="mt-4 w-full bg-medical-600 text-white py-2 rounded hover:bg-medical-700">Зберегти</button>
            </div>`;
        else if (type === 'doc') html = `
            <div class="p-6 text-center">
                <h3 class="font-bold mb-4">Завантаження файлу</h3>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 mb-4 hover:border-medical-500 transition-colors cursor-pointer" onclick="app.uploadDoc()">
                    <i class="fa-solid fa-cloud-arrow-up text-4xl text-gray-300 mb-2"></i>
                    <p class="text-xs text-gray-500">Натисніть для вибору файлу</p>
                </div>
                <button onclick="app.closeModal()" class="text-gray-400 text-sm">Скасувати</button>
            </div>`;

        ct.innerHTML = html;
    },

    closeModal() {
        const bd = document.getElementById('modal-backdrop');
        const ct = document.getElementById('modal-content');
        bd.classList.add('opacity-0'); ct.classList.add('scale-95');
        setTimeout(() => bd.classList.add('hidden'), 200);
    },

    mockSave(msg) {
        this.closeModal();
        setTimeout(() => this.showToast(msg, 'success'), 300);
    },

    showToast(msg, type) {
        const c = document.getElementById('toast-container');
        const t = document.createElement('div');
        const color = type === 'success' ? 'bg-green-600' : 'bg-gray-800';
        t.className = `${color} text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 transform translate-y-10 opacity-0 transition-all duration-300`;
        t.innerHTML = `<i class="fa-solid fa-${type==='success'?'check':'info'}-circle"></i> <span class="text-sm font-medium">${msg}</span>`;
        c.appendChild(t);
        requestAnimationFrame(() => t.classList.remove('translate-y-10', 'opacity-0'));
        setTimeout(() => { t.classList.add('opacity-0', 'translate-y-2'); setTimeout(() => t.remove(), 300); }, 3000);
    },

    // --- UTILS ---
    unlockDrafts() {
        const val = document.getElementById('pin-input').value;
        if(val === this.state.pin) { this.state.pinLocked = false; this.render(); }
        else this.showToast('Невірний PIN', 'error');
    },
    lockDrafts() { this.state.pinLocked = true; this.render(); },

    initChart() {
        const ctx = document.getElementById('revenueChart');
        if(!ctx) return;
        if(this.chartInstance) this.chartInstance.destroy();
        this.chartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Т1', 'Т2', 'Т3', 'Т4', 'Т5', 'Т6', 'Т7', 'Т8'],
                datasets: [{ label: 'Дохід', data: [12000, 19000, 15000, 22000, 28000, 25000, 35000, 42500], borderColor: '#0d9488', backgroundColor: 'rgba(13,148,136,0.1)', fill: true, tension: 0.4 }]
            },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, grid: { borderDash: [2, 4] } }, x: { grid: { display: false } } } }
        });
    }
};

// --- HELPERS ---
function getAge(d) { return new Date().getFullYear() - new Date(d).getFullYear(); }

// Start
window.addEventListener('load', () => app.init());