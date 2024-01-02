<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AJAX Example</title>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
</head>

<body>

    <h1>Array Fetcher</h1>

    <script>
        $(document).ready(function () {
            // Using jQuery for simplicity, you can use vanilla JavaScript as well
            
            $.ajax({
                url: 'save.php', // The file that contains the array
                type: 'GET',
                data:{

                },
                dataType: 'json',
                success: function (data) {
                    // 'data' is the array fetched from data.php
                    console.log('Fetched Array:', data);

                    // Process the array data here as needed
                    for (var i = 0; i < data.length; i++) {
                        console.log('Element ' + i + ': ' + data[i]);
                    }
                },
                error: function (error) {
                    console.error('Error fetching array:', error);
                }
            });
        });
    </script>

</body>

</html>