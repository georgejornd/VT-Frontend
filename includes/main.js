

	const animItems = document.querySelectorAll('.anim-items');

	if (animItems.lenght > 0) 
	{
		window.addEventListener('scroll', animOnScroll);
		function animOnScroll()
		{
			for (var i = 0; i < animItems.lenght; i++) 
			{
				const animItem = animItems[i];
				const animItemsHeight = animItem.offsetHeight;
				const animItemsOffset = offset(animItem).top;
				const animStart = 4;

				let animItemPoint = window.innerHeight - animItemsHeight / animStart;

				if (animItemsHeight > window.innerHeight)
				{
					animItemPoint = window.innerHeight - animItemsHeight / animStart;
				}

				if ((pageYOffset > animItemsOffset - animItemPoint) && pageYOffset < (animItemsOffset + animItemsHeight))
				{
					animItem.classList.add('active');
				}else
				{
					animItem.classList.remove('active');
				}
			}
		}

		function offset(el) 
		{
			const rect = el.getBoundingClientRect();
				scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop = window.pageXOffset || document.documentElement.scrollTop;
			return { top: rect.top + scrollTop, left: rect.left + scrollLeft } 

		}

		animOnScroll();
	}