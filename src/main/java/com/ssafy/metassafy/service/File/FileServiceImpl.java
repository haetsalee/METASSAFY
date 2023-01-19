package com.ssafy.metassafy.service.File;


import com.google.cloud.storage.Blob;
import com.google.cloud.storage.Bucket;
import com.google.firebase.cloud.StorageClient;
import com.ssafy.metassafy.dto.file.FileDto;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.util.UUID;

@Service
public class FileServiceImpl implements FileService{

    @Value("${firebase-bucket}")
    private String firebaseBucket;

    @Override
    public FileDto saveFile(MultipartFile multipartFile) throws IOException{

        FileDto fileDto = new FileDto();

        // 원래 파일 이름 추출
        String origin_name = multipartFile.getOriginalFilename();

        // 파일 이름으로 쓸 uuid 생성
        String uuid = UUID.randomUUID().toString();

        // uuid와 확장자 결합
        String saved_name = uuid + origin_name;

        // 파일 업로드 & 링크 받아오기
        String path = this.uploadFile(multipartFile, saved_name);

        fileDto.setOrigin_name(origin_name);
        fileDto.setSaved_name(saved_name);
        fileDto.setPath(path);

        return fileDto;
    }

    private String uploadFile(MultipartFile file, String fileName) throws IOException {
        Bucket bucket = StorageClient.getInstance().bucket(firebaseBucket);
        InputStream content = new ByteArrayInputStream(file.getBytes());
        Blob blob = bucket.create(fileName, content, file.getContentType());
        return blob.getMediaLink();
    }
}
