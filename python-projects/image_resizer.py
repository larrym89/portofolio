# install pillow 
# import pillow
# ompen the image to resize
# print the current size of theat image
# specify the size we wanna change it to
#save the new resized image
from PIL import Image

def resize_image(size1, size2):
    image = Image.open('test.png')
    
    print(f"Current size: {image.size}")

    resized_image = image.resize((size1, size2))

    resized_image.save('resized_image.png')

   
size1 = int(input('Enter width: '))
size2 = int(input('Enter height: '))
resize_image(size1, size2)