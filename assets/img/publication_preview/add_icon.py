import argparse
import logging
import cv2
import numpy as np
import os
logging.getLogger().setLevel(logging.INFO)
logging.basicConfig(
    level=logging.INFO, format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
)


def main(args):
    journal = (0,0,102)
    conference = (66,93, 33)
    color = journal if args.journal else conference
    filename, ext = os.path.splitext(args.img_path)
    img = cv2.imread(args.img_path)
    img = cv2.resize(img,(640,640) )
    title = np.ones((80,640,3)) * color
    title = title.astype(np.uint8)
    cv2.putText(title, args.abbreviation, (15,75),cv2.FONT_HERSHEY_SIMPLEX  ,3, (255,255,255),3)
    img = np.concatenate([title, img], axis = 0)
    cv2.imwrite(filename+"_icon"+ext, img)


def arg_parser():
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "img_path", type=str, help="path to image"
    )
    parser.add_argument(
        "--abbreviation", type=str, help="The abbreviation of conference/journal"
    )
    
    parser.add_argument(
        "--journal", action='store_true', help="Use journal color"
    )
    
    return parser.parse_args()


if __name__ == "__main__":
    args = arg_parser()
    main(args)
