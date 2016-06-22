# PsychoTypo
## Library to make your text elements go PSYCHO.

To get started you need to include the framework into your html.
You can do this by linking the javascript(.js) file, copy paste the following into your header:
```
<script src="PsychoTypo.js"></script>
```

After you have linked the javascript(.js) file it's time too decide which text element you want to make Psycho. You can do this by simply adding the id Psycho to the text element.
```
<h1 id="Psycho" style="text-align: center"> HELLO I AM PSHYCO.</h1>
```

The last step is calling the function and customizing it to your likings. This is done very easy, just copy paste the following code under your body tag. 
```
<script>
	PsychoPara({
		transition: true,// Or false
		color: true,// Or false
		spacing : true, // Or false
		interval: 3000, // After 3000 ms the next change will occur. You can customize this to whatever time you want. 
	});
</script>
```
