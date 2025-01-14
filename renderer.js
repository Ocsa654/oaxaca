document.addEventListener('DOMContentLoaded', () => {
    // Login form handling
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            if (username === 'admin' && password === 'admin') {
                window.location.href = 'dashboard.html';
            } else if (username === 'user' && password === 'user') {
                window.location.href = 'capturistas.html';
            } else {
                alert('Credenciales incorrectas');
            }
        });
    }

    // Logout button handling
    const logoutButton = document.getElementById('logout');
    if (logoutButton) {
        logoutButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'index.html';
        });
    }

    // Capturistas CRUD operations
    const capturistasTable = document.getElementById('capturistasTable');
    if (capturistasTable) {
        // Sample data - in a real app, this would come from a database
        const capturistas = [
            { id: 1, nombre: 'Karthi', correo: 'karthi@gmail.com', telefono: '7505477760', credential: '123456730547760', fecha: '08-Dec-2021' },
            { id: 2, nombre: 'Karthi', correo: 'karthi@gmail.com', telefono: '7505477760', credential: '123456730547760', fecha: '08-Dec-2021' },
            { id: 3, nombre: 'Karthi', correo: 'karthi@gmail.com', telefono: '7505477760', credential: '123456730547760', fecha: '08-Dec-2021' }
        ];

        // Render capturistas table
        function renderCapturistas() {
            capturistasTable.innerHTML = capturistas.map(c => `
                <tr>
                    <td>
                        <img src="assets/profile.jpg" alt="${c.nombre}" class="rounded-circle me-2" style="width: 30px; height: 30px;">
                        ${c.nombre}
                    </td>
                    <td>${c.correo}</td>
                    <td>${c.telefono}</td>
                    <td>${c.credential}</td>
                    <td>${c.fecha}</td>
                    <td>
                        <button class="btn btn-sm btn-warning me-2" onclick="editCapturista(${c.id})">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-sm btn-danger" onclick="deleteCapturista(${c.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                </tr>
            `).join('');
        }

        // Initial render
        renderCapturistas();

        // Add Capturista button
        const addButton = document.getElementById('addCapturista');
        if (addButton) {
            addButton.addEventListener('click', () => {
                const modal = new bootstrap.Modal(document.getElementById('capturistaModal'));
                modal.show();
            });
        }

        // Save Capturista
        const saveButton = document.getElementById('saveCapturista');
        if (saveButton) {
            saveButton.addEventListener('click', () => {
                const nombre = document.getElementById('nombre').value;
                const correo = document.getElementById('correo').value;
                const telefono = document.getElementById('telefono').value;
                const credential = document.getElementById('credential').value;

                // Add new capturista
                capturistas.push({
                    id: capturistas.length + 1,
                    nombre,
                    correo,
                    telefono,
                    credential,
                    fecha: new Date().toLocaleDateString()
                });

                renderCapturistas();
                bootstrap.Modal.getInstance(document.getElementById('capturistaModal')).hide();
            });
        }
    }
});
