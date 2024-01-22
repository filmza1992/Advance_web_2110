export const FormatRating = (amountRating : number)=>{
        if(amountRating < 100000){
            return (amountRating.toString().substring(0,2)+"K");
          }else if(amountRating < 1000000){
            return  (amountRating.toString().substring(0,3)+"K");
          }else if(amountRating < 10000000){
            return (amountRating.toString().substring(0,1)+"M");
          }else if(amountRating < 100000000){
            return (amountRating.toString().substring(0,2)+"M");
          }
};

export const FormatVideo = (amountVideo : number)=>{
    if(amountVideo < 100){
        return String(amountVideo);
    }else{
        return String("99+");
    }
}

export const FormatPhoto = (amountPhoto : number)=>{
    if(amountPhoto < 100){
        return String(amountPhoto);
    }else{
        return String("99+");
    }
}

export const FormatUserReview = (amountUserReview : number)=>{
    if(amountUserReview < 1000){
        return String(amountUserReview);
    }else if(amountUserReview < 10000){
        return (amountUserReview.toString().substring(0,1)+"."+amountUserReview.toString().substring(1,2)+ "k");
    }
}