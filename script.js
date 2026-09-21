// ========================================
// CODE SNIPPETS
// All code examples are stored in JS.
// ========================================

const codeSnippets = {

    // ====================================
    // HOME PAGE EXAMPLES
    // ====================================

    htmlStructure: `<body>

    <header>
        <h1>Welcome to My Web House</h1>
    </header>

    <main>
        <p>This is where the main content goes.</p>
    </main>

    <footer>
        <p>
            © <span id="currentYear"></span>
            My Web House
        </p>
    </footer>

</body>`,


    cssStyling: `body {
    font-family: Arial, sans-serif;
}

header {
    background-color: #007bff;
    color: white;
    padding: 20px;
}

main {
    padding: 20px;
}

footer {
    background-color: #f8f9fa;
    padding: 10px;
    text-align: center;
}`,


    javascriptToggle: `function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

const themeButton =
    document.getElementById('themeButton');

themeButton.addEventListener(
    'click',
    toggleTheme
);`,


    responsiveTable: `.table-container {
    width: 100%;
    overflow-x: auto;
}

table {
    width: 100%;
    border-collapse: collapse;
}`,


    tableSorting: `tableHeaders.forEach((header, columnIndex) => {

    header.addEventListener('click', () => {

        rows.sort((rowA, rowB) => {

            const valueA =
                rowA.children[columnIndex].textContent;

            const valueB =
                rowB.children[columnIndex].textContent;

            return valueA.localeCompare(valueB);
        });

    });

});`,


    tableFiltering: `filterInput.addEventListener('input', () => {

    const filterText =
        filterInput.value.toLowerCase();

    rows.forEach((row) => {

        const rowText =
            row.textContent.toLowerCase();

        row.style.display =
            rowText.includes(filterText)
                ? ''
                : 'none';

    });

});`,


    tablePagination: `const rowsPerPage = 5;
let currentPage = 1;

function displayPage() {

    const startIndex =
        (currentPage - 1) * rowsPerPage;

    const endIndex =
        startIndex + rowsPerPage;

    rows.forEach((row) => {
        row.style.display = 'none';
    });

    rows
        .slice(startIndex, endIndex)
        .forEach((row) => {
            row.style.display = '';
        });

}`,


    tableEditing: `<td contenteditable="true">
    Alice
</td>`,


    tableAccessibility: `<table>

    <caption>
        Employee Information
    </caption>

    <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
        </tr>
    </thead>

</table>`,


    formValidation: `const emailPattern =
    /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

if (!emailPattern.test(emailInput.value)) {

    emailError.textContent =
        'Enter a valid email address.';

}`,


    multiStepForm: `let currentStep = 0;

function showStep(step) {

    const steps =
        document.querySelectorAll('.form-step');

    steps.forEach((item) => {
        item.hidden = true;
    });

    steps[step].hidden = false;

}`,


    dynamicFields: `const newInput =
    document.createElement('input');

newInput.type = 'text';
newInput.name = 'additionalItem';

form.appendChild(newInput);`,


    autocomplete: `<input
    type="text"
    list="cities"
    name="city"
>

<datalist id="cities">
    <option value="New York">
    <option value="London">
    <option value="Paris">
</datalist>`,


    filePreview: `fileInput.addEventListener('change', () => {

    const file = fileInput.files[0];

    if (file) {

        preview.src =
            URL.createObjectURL(file);

    }

});`,


    multimediaElements: `<video controls>
    <source
        src="video.mp4"
        type="video/mp4"
    >
</video>

<audio controls>
    <source
        src="audio.mp3"
        type="audio/mpeg"
    >
</audio>

<picture>
    <source
        media="(min-width: 800px)"
        srcset="large.jpg"
    >

    <img
        src="small.jpg"
        alt="Example"
    >
</picture>`,


    mediaInteraction: `const video =
    document.getElementById('video');

playButton.addEventListener('click', () => {
    video.play();
});

pauseButton.addEventListener('click', () => {
    video.pause();
});`,


    customVideoControls: `playPauseButton.addEventListener(
    'click',
    () => {

        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }

    }
);`,


    adaptiveStreaming: `if (Hls.isSupported()) {

    const hls = new Hls();

    hls.loadSource(
        'stream.m3u8'
    );

    hls.attachMedia(video);

} else if (
    video.canPlayType(
        'application/vnd.apple.mpegurl'
    )
) {

    video.src = 'stream.m3u8';

}`,


    audioVisualization: `const audioContext =
    new AudioContext();

const analyser =
    audioContext.createAnalyser();

const data =
    new Uint8Array(
        analyser.frequencyBinCount
    );

analyser.getByteFrequencyData(data);`,


    responsiveImages: `<img
    src="small.jpg"
    srcset="
        small.jpg 480w,
        medium.jpg 800w,
        large.jpg 1200w
    "
    sizes="
        (max-width: 600px) 480px,
        800px
    "
    alt="Responsive example"
>`,


    lazyLoading: `<img
    src="photo.jpg"
    loading="lazy"
    alt="Example photograph"
>`,


    canvasExample: `const canvas =
    document.getElementById('canvas');

const context =
    canvas.getContext('2d');

context.fillRect(
    20,
    20,
    150,
    100
);`,


    webGLExample: `const canvas =
    document.getElementById('canvas');

const gl =
    canvas.getContext('webgl');

if (!gl) {
    console.log(
        'WebGL is not supported.'
    );
}`,


    preloading: `<link
    rel="preload"
    href="video.mp4"
    as="video"
    type="video/mp4"
>`,


    mediaAccessibility: `<video controls>

    <source
        src="video.mp4"
        type="video/mp4"
    >

    <track
        kind="captions"
        src="captions.vtt"
        srclang="en"
        label="English"
        default
    >

</video>`,


    // ====================================
    // GUIDES PAGE EXAMPLES
    // ====================================

    guideDataTable: `const table =
    document.getElementById('demoTable');

const filterInput =
    document.getElementById('filterInput');

let rows =
    Array.from(
        table.querySelectorAll('tbody tr')
    );

let currentPage = 1;

const rowsPerPage = 2;

function displayPage() {

    const filterText =
        filterInput.value.toLowerCase();

    const filteredRows =
        rows.filter((row) =>
            row.textContent
                .toLowerCase()
                .includes(filterText)
        );

    rows.forEach((row) => {
        row.style.display = 'none';
    });

    const startIndex =
        (currentPage - 1) * rowsPerPage;

    const endIndex =
        startIndex + rowsPerPage;

    filteredRows
        .slice(startIndex, endIndex)
        .forEach((row) => {
            row.style.display = '';
        });

}`,


    guideFormValidation: `const emailPattern =
    /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

const passwordPattern =
    /^(?=.*[A-Za-z])(?=.*\\d).{8,}$/;

const phonePattern =
    /^\\d{3}-\\d{3}-\\d{4}$/;

function validateEmail() {

    if (
        !emailPattern.test(
            emailInput.value
        )
    ) {

        emailError.textContent =
            'Enter a valid email address.';

        return false;

    }

    emailError.textContent = '';

    return true;

}

demoForm.addEventListener(
    'submit',
    (event) => {

        event.preventDefault();

        const isEmailValid =
            validateEmail();

        const isPasswordValid =
            validatePassword();

        const isPhoneValid =
            validatePhone();

        if (
            isEmailValid &&
            isPasswordValid &&
            isPhoneValid
        ) {

            alert(
                'Form submitted successfully!'
            );

        }

    }
);`,


    guideHlsStreaming: `const video =
    document.getElementById('demoVideo');

const videoSource =
    'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';

if (
    typeof Hls !== 'undefined' &&
    Hls.isSupported()
) {

    const hls = new Hls();

    hls.loadSource(videoSource);

    hls.attachMedia(video);

    hls.on(
        Hls.Events.ERROR,
        (event, data) => {

            if (data.fatal) {

                if (
                    data.type ===
                    Hls.ErrorTypes.NETWORK_ERROR
                ) {

                    hls.startLoad();

                } else if (
                    data.type ===
                    Hls.ErrorTypes.MEDIA_ERROR
                ) {

                    hls.recoverMediaError();

                } else {

                    hls.destroy();

                }

            }

        }
    );

} else if (
    video.canPlayType(
        'application/vnd.apple.mpegurl'
    )
) {

    video.src = videoSource;

}`

};


// ========================================
// CODE MODAL
// ========================================

const codeModal =
    document.getElementById('codeModal');

const modalCode =
    document.getElementById('modalCode');

const closeModalButton =
    document.getElementById('closeModal');

const copyCodeButton =
    document.getElementById('copyCode');

const copyFeedback =
    document.getElementById('copyFeedback');

const showCodeButtons =
    document.querySelectorAll(
        '.show-code-button'
    );

let lastFocusedElement = null;


// ========================================
// OPEN MODAL
// ========================================

function openCodeModal(codeName) {

    try {

        const selectedCode =
            codeSnippets[codeName];

        if (!selectedCode) {

            throw new Error(
                `Code snippet "${codeName}" was not found.`
            );

        }

        lastFocusedElement =
            document.activeElement;

        modalCode.textContent =
            selectedCode;

        copyFeedback.textContent = '';

        copyCodeButton.textContent =
            'Copy Code';

        codeModal.classList.add('open');

        codeModal.setAttribute(
            'aria-hidden',
            'false'
        );

        document.body.classList.add(
            'modal-open'
        );

        closeModalButton.focus();

    } catch (error) {

        console.error(
            'Unable to open code example:',
            error
        );

    }

}


// ========================================
// CLOSE MODAL
// ========================================

function closeCodeModal() {

    codeModal.classList.remove('open');

    codeModal.setAttribute(
        'aria-hidden',
        'true'
    );

    document.body.classList.remove(
        'modal-open'
    );

    copyFeedback.textContent = '';

    copyCodeButton.textContent =
        'Copy Code';

    if (lastFocusedElement) {

        lastFocusedElement.focus();

    }

}


// ========================================
// SHOW CODE BUTTONS
// ========================================

showCodeButtons.forEach((button) => {

    button.addEventListener(
        'click',
        () => {

            const codeName =
                button.dataset.code;

            openCodeModal(codeName);

        }
    );

});


// ========================================
// CLOSE BUTTON
// ========================================

closeModalButton.addEventListener(
    'click',
    closeCodeModal
);


// ========================================
// CLICK OUTSIDE TO CLOSE
// ========================================

codeModal.addEventListener(
    'click',
    (event) => {

        if (
            event.target === codeModal
        ) {

            closeCodeModal();

        }

    }
);


// ========================================
// ESCAPE KEY TO CLOSE
// ========================================

document.addEventListener(
    'keydown',
    (event) => {

        if (
            event.key === 'Escape' &&
            codeModal.classList.contains(
                'open'
            )
        ) {

            closeCodeModal();

        }

    }
);


// ========================================
// COPY CODE
// ========================================

async function copyCode() {

    const code =
        modalCode.textContent;

    if (!code) {

        copyFeedback.textContent =
            'No code available to copy.';

        return;

    }

    try {

        await navigator.clipboard.writeText(
            code
        );

        copyFeedback.textContent =
            'Code copied!';

        copyCodeButton.textContent =
            'Copied!';

        setTimeout(() => {

            copyFeedback.textContent = '';

            copyCodeButton.textContent =
                'Copy Code';

        }, 2000);

    } catch (error) {

        console.error(
            'Unable to copy code:',
            error
        );

        copyFeedback.textContent =
            'Unable to copy code.';

    }

}


copyCodeButton.addEventListener(
    'click',
    copyCode
);


// ========================================
// DATA TABLE
// Sorting, Filtering, and Pagination
// Only runs when the table exists.
// ========================================

const table =
    document.getElementById('demoTable');

const filterInput =
    document.getElementById('filterInput');

const prevPageButton =
    document.getElementById('prevPage');

const nextPageButton =
    document.getElementById('nextPage');


if (
    table &&
    filterInput &&
    prevPageButton &&
    nextPageButton
) {

    const tableBody =
        table.querySelector('tbody');

    const tableHeaders =
        table.querySelectorAll('th');

    let rows =
        Array.from(
            tableBody.querySelectorAll('tr')
        );

    let currentPage = 1;

    const rowsPerPage = 2;

    let currentSortColumn = -1;

    let sortAscending = true;


    function displayPage() {

        const filterText =
            filterInput.value
                .toLowerCase()
                .trim();

        const filteredRows =
            rows.filter((row) => {

                const rowText =
                    row.textContent
                        .toLowerCase();

                return rowText.includes(
                    filterText
                );

            });


        const totalPages =
            Math.ceil(
                filteredRows.length /
                rowsPerPage
            );


        if (totalPages === 0) {

            currentPage = 1;

        } else if (
            currentPage > totalPages
        ) {

            currentPage = totalPages;

        }


        rows.forEach((row) => {

            row.style.display = 'none';

        });


        const startIndex =
            (currentPage - 1) *
            rowsPerPage;

        const endIndex =
            startIndex +
            rowsPerPage;


        filteredRows
            .slice(
                startIndex,
                endIndex
            )
            .forEach((row) => {

                row.style.display = '';

            });


        prevPageButton.disabled =
            currentPage <= 1;

        nextPageButton.disabled =
            totalPages === 0 ||
            currentPage >= totalPages;

    }


    filterInput.addEventListener(
        'input',
        () => {

            currentPage = 1;

            displayPage();

        }
    );


    prevPageButton.addEventListener(
        'click',
        () => {

            if (currentPage > 1) {

                currentPage--;

                displayPage();

            }

        }
    );


    nextPageButton.addEventListener(
        'click',
        () => {

            const filterText =
                filterInput.value
                    .toLowerCase()
                    .trim();

            const filteredRows =
                rows.filter((row) => {

                    return row.textContent
                        .toLowerCase()
                        .includes(filterText);

                });


            const totalPages =
                Math.ceil(
                    filteredRows.length /
                    rowsPerPage
                );


            if (
                currentPage <
                totalPages
            ) {

                currentPage++;

                displayPage();

            }

        }
    );


    tableHeaders.forEach(
        (header, columnIndex) => {

            header.addEventListener(
                'click',
                () => {

                    if (
                        currentSortColumn ===
                        columnIndex
                    ) {

                        sortAscending =
                            !sortAscending;

                    } else {

                        currentSortColumn =
                            columnIndex;

                        sortAscending = true;

                    }


                    rows.sort(
                        (rowA, rowB) => {

                            const valueA =
                                rowA.children[
                                    columnIndex
                                ]
                                    .textContent
                                    .trim();

                            const valueB =
                                rowB.children[
                                    columnIndex
                                ]
                                    .textContent
                                    .trim();


                            const numberA =
                                Number(valueA);

                            const numberB =
                                Number(valueB);


                            let comparison;


                            if (
                                !Number.isNaN(numberA) &&
                                !Number.isNaN(numberB)
                            ) {

                                comparison =
                                    numberA -
                                    numberB;

                            } else {

                                comparison =
                                    valueA.localeCompare(
                                        valueB
                                    );

                            }


                            return sortAscending
                                ? comparison
                                : -comparison;

                        }
                    );


                    rows.forEach(
                        (row) => {

                            tableBody.appendChild(
                                row
                            );

                        }
                    );


                    currentPage = 1;

                    displayPage();

                }
            );

        }
    );


    displayPage();

}


// ========================================
// COMPLEX FORM
// Form Validation
// Only runs when the form exists.
// ========================================

const demoForm =
    document.getElementById('demoForm');

const emailInput =
    document.getElementById('email');

const passwordInput =
    document.getElementById('password');

const phoneInput =
    document.getElementById('phone');

const emailError =
    document.getElementById('emailError');

const passwordError =
    document.getElementById(
        'passwordError'
    );

const phoneError =
    document.getElementById(
        'phoneError'
    );


if (
    demoForm &&
    emailInput &&
    passwordInput &&
    phoneInput &&
    emailError &&
    passwordError &&
    phoneError
) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const passwordPattern =
        /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

    const phonePattern =
        /^\d{3}-\d{3}-\d{4}$/;


    function validateEmail() {

        const email =
            emailInput.value.trim();

        if (email === '') {

            emailError.textContent =
                'Email is required.';

            return false;

        }

        if (
            !emailPattern.test(email)
        ) {

            emailError.textContent =
                'Enter a valid email address.';

            return false;

        }

        emailError.textContent = '';

        return true;

    }


    function validatePassword() {

        const password =
            passwordInput.value;

        if (password === '') {

            passwordError.textContent =
                'Password is required.';

            return false;

        }

        if (
            !passwordPattern.test(
                password
            )
        ) {

            passwordError.textContent =
                'Password must be at least 8 characters and include a letter and number.';

            return false;

        }

        passwordError.textContent = '';

        return true;

    }


    function validatePhone() {

        const phone =
            phoneInput.value.trim();

        if (
            phone !== '' &&
            !phonePattern.test(phone)
        ) {

            phoneError.textContent =
                'Use the format 123-456-7890.';

            return false;

        }

        phoneError.textContent = '';

        return true;

    }


    emailInput.addEventListener(
        'input',
        validateEmail
    );

    passwordInput.addEventListener(
        'input',
        validatePassword
    );

    phoneInput.addEventListener(
        'input',
        validatePhone
    );


    demoForm.addEventListener(
        'submit',
        (event) => {

            event.preventDefault();

            const isEmailValid =
                validateEmail();

            const isPasswordValid =
                validatePassword();

            const isPhoneValid =
                validatePhone();


            if (
                isEmailValid &&
                isPasswordValid &&
                isPhoneValid
            ) {

                alert(
                    'Form submitted successfully!'
                );

            }

        }
    );

}


// ========================================
// MULTIMEDIA
// Adaptive Streaming with HLS
// Only runs when the video exists.
// ========================================

const video =
    document.getElementById(
        'demoVideo'
    );


if (video) {

    const videoSource =
        'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';


    if (
        typeof Hls !== 'undefined' &&
        Hls.isSupported()
    ) {

        const hls =
            new Hls();

        hls.loadSource(
            videoSource
        );

        hls.attachMedia(
            video
        );


        hls.on(
            Hls.Events.ERROR,
            (event, data) => {

                if (data.fatal) {

                    switch (
                        data.type
                    ) {

                        case Hls.ErrorTypes
                            .NETWORK_ERROR:

                            console.error(
                                'Fatal network error. Attempting recovery.'
                            );

                            hls.startLoad();

                            break;


                        case Hls.ErrorTypes
                            .MEDIA_ERROR:

                            console.error(
                                'Fatal media error. Attempting recovery.'
                            );

                            hls.recoverMediaError();

                            break;


                        default:

                            console.error(
                                'Unrecoverable HLS error.'
                            );

                            hls.destroy();

                            break;

                    }

                }

            }
        );


    } else if (
        video.canPlayType(
            'application/vnd.apple.mpegurl'
        )
    ) {

        video.src =
            videoSource;


    } else {

        console.error(
            'HLS video is not supported in this browser.'
        );

    }

}